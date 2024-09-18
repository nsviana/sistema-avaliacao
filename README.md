
# Sistema Simplificado - Coleta de Exercícios

Template padrão de um sistema simplificado em NodeJS+Express para coletar os códigos referentes à trabalhos práticos nas disciplinas de Programação.

[Sistema-Avaliação]: Contém 2 módulos simples Front (HTML+CSS/BootStrap+JS) e BackEnd (NodeJS/Express). O sistema recebe como entrada um arquivo XLS formatado com dados de _Nome_ e _Matrícula_ de alunos e carrega em um input/select a lista de alunos. O aluno seleciona seu nome e é direcionado para a página de envio de arquivos. Neste sistema simples temos 4 arquivos que podem ser enviados. Do lado do servidor os arquivos são recebidos e salvos em uma pasta criada de acordo com o nome do estudante na planilha XLS.

_Primeira atualização: 18 Sept 2024_

## Estrutura do Projeto
Descrição de Cada arquivo/Pasta...

← `README.md`: Descrição do Projeto

← `/node_modules`: Dependências necessárias para o ambiente node

← `package.json`: Módulos e dependências da aplicação: `body-parser`, `bootstrap`, `express`, `multer`, e `xlsx`

← `/public`: Contém o arquivo HTML (index.html) + CSS/Bootstrap

← `diario.xls`: Planilha com os dados dos alunos.

← `/uploads`: Contém todas as pastas com os arquivos recebidos de cada aluno


## Para executar a aplicação
**`node server.js`**

## Contato

- Prof. Nairon Viana
    - Página Pessoal: http://nsviana.github.io

