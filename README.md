# API de Quiz

Bem-vindo à API de Quiz! Esta é uma API desenvolvida para criar e gerenciar quizzes interativos. Com ela, você pode criar perguntas, respostas e acompanhar o desempenho dos usuários em seus quizzes.

## Requisitos

Antes de começar a utilizar a API de Quiz, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js: Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org).
- MongoDB: A API de Quiz utiliza o MongoDB como banco de dados. Você pode baixar e instalar o MongoDB a partir do [site oficial](https://www.mongodb.com)

## Instalação

Siga as etapas abaixo para configurar a API de Quiz em seu ambiente local:

1. Clone o repositório do GitHub:

   ```bash
   git clone https://github.com/GabrielFeijo/API-Quiz.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd api-quiz
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start ou npm run start-dev
   ```

Após executar o comando acima, o servidor de desenvolvimento será iniciado na porta padrão 3000. Agora você pode começar a interagir com a API de Quiz.

## Utilização

A API de Quiz fornece endpoints para criar, buscar, atualizar e deletar perguntas, respostas e pontuações. Você pode fazer requisições HTTP para os seguintes endpoints:

### Perguntas

- `GET /question`: Retorna todas as perguntas.
- `GET /question/:category`: Retorna as perguntas de uma categoria específica.
- `POST /question`: Adiciona uma nova pergunta.
- `PUT /question/:id`: Atualiza uma pergunta existente com base no ID.
- `DELETE /question/:id`: Deleta uma pergunta existente com base no ID.

### Pontuação

- `GET /score`: Retorna todas as pontuações.
- `POST /score`: Adiciona uma nova pontuação.
- `PUT /score/:id`: Atualiza uma pontuação existente com base no ID.
- `DELETE /score/:id`: Deleta uma pontuação existente com base no ID.

Certifique-se de incluir os dados corretos no corpo das requisições POST e PUT, seguindo o formato adequado para cada rota.

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais informações, consulte o arquivo LICENSE.
