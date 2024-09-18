const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Função para carregar nomes dos alunos
function loadStudentNames() {
    const workbook = xlsx.readFile('diario.xls');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data.map(row => ({ matricula: row['Matrícula'], nome: row['Nome'] }));
}

// Endpoint para retornar a lista de alunos
app.get('/students', (req, res) => {
    const students = loadStudentNames();
    res.json(students);
});

// Endpoint para verificar se a pasta já existe
app.post('/check-folder', (req, res) => {
    const { nome } = req.body;
    const [primeiroNome, segundoNome] = nome.split(' ').map(n => n.toLowerCase());
    const folderName = `${primeiroNome}-${segundoNome}`;
    const folderPath = path.join(__dirname, 'uploads', folderName);
    
    if (fs.existsSync(folderPath)) {
        return res.status(400).send('Esta avaliação já foi enviada, contate o professor!');
    } else {
        fs.mkdirSync(folderPath, { recursive: true });
        return res.send('Pasta criada com sucesso!');
    }
});

// Endpoint para upload dos arquivos
app.post('/upload', upload.array('arquivos', 4), (req, res) => {
    const { nome } = req.body;
    const [primeiroNome, segundoNome] = nome.split(' ').map(n => n.toLowerCase());
    const folderName = `${primeiroNome}-${segundoNome}`;
    const folderPath = path.join(__dirname, 'uploads', folderName);

    // Mover os arquivos para a pasta do aluno
    req.files.forEach(file => {
        const destPath = path.join(folderPath, file.originalname);
        fs.renameSync(file.path, destPath);
    });

    return res.send('Enviado com Sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
