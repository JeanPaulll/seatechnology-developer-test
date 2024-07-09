### API

- CompanyController: Gerencia empresas.
- WorkerController: Gerencia trabalhadores.
- ActivityController: Gerencia atividades.
- EquipmentController: Gerencia equipamentos.
- RoleController: Gerencia cargos.
- ActivityWorkerController: Gerencia a relação entre atividades e trabalhadores.

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

#Rotas

![](../frontend/images/routes.png)
