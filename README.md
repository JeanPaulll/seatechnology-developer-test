# SEA Tecnologia



<video width="320" height="240" controls>
  <source src="https://github.com/JeanPaulll/seatechnology-developer-test/blob/main/frontend/images/navegacao.webm" type="video/webm">
  Seu navegador não suporta o elemento de vídeo.
</video>

<video width="320" height="240" controls>
  <source src="./frontend/images/navegacao.webm" type="video/webm">
  Seu navegador não suporta o elemento de vídeo.
</video>



### teste
<iframe width="560" height="315" src="https://github.com/JeanPaulll/seatechnology-developer-test/blob/main/frontend/images/navegacao.webm" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Projeto técnico do Processo Seletivo da SEA Tecnologia

Este projeto é composto por um front-end e um back-end. O front-end foi desenvolvido em react, e o back-end foi
desenvolvido em AdonisJS, construção de uma API.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- SQLite (para o banco de dados)

## Configuração do Backend (API)

### Instalação de Dependências

1. Navegue até o diretório do backend:
   ```sh
   cd backend
   npm install
   npm install -g @adonisjs/cli
   cp .env.example .env
   ```

2. Para criar as tabelas no banco de dados, execute as migrações:

   ```sh 
   adonis migration:run
   ```
3. Para popular o banco de dados com dados iniciais, execute os seeds:
    ```sh 
    adonis seed 
    ```
4. Para iniciar o servidor:
   ```sh 
   adonis serve --dev
   ```
Para testar uma rota: GET http://127.0.0.1:3333/companies   

### O servidor estará rodando em http://localhost:3333

## Rotas api

![](./frontend/images/routes.png)

## Configuração do Frontend

1. Navegue até o diretório do frontend:

   ```sh 
   cd frontend
   npm install ou yarn install
   yarn start
   ```

