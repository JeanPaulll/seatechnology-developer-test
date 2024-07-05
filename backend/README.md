#### CompanyController: Gerencia empresas.
#### WorkerController: Gerencia trabalhadores.
#### ActivityController: Gerencia atividades.
#### EquipmentController: Gerencia equipamentos.
#### RoleController: Gerencia cargos.
#### ActivityWorkerController: Gerencia a relação entre atividades e trabalhadores.

### Instalação de Dependências

1. Navegue até o diretório do backend:
   ```sh
   cd backend
   npm install
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
### O servidor estará rodando em http://localhost:3333.
