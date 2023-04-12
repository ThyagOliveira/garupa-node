# garupa-node

## Instruções gerais
Para configurar o ambiente crie um arquivo .env conforme o exemplo em [.env-example](.env-example) e em seguida execute os seguintes comandos

```bash
$ npm install
```

```bash
$ docker-compose build
$ docker-compose up
```

```bash
$ npm run start:dev
```

Para acessar a instância do pgadmin
```
http://localhost:8080
```

## Endpoints

- POST `/api/users`
```json
{
	"name": "Rakel",
	"email": "rakel@email.com",
	"password": "123456"
}
```
<img width="1063" alt="endpoint-create" src="https://user-images.githubusercontent.com/38231807/231573566-85e0af89-c51f-4678-8bf7-258b98019a68.png">

- POST `/api/auth/login`
```json
{
	"email": "rakel@email.com",
	"password": "123456"
}
```
<img width="1431" alt="endpoint-login" src="https://user-images.githubusercontent.com/38231807/231571853-a73f7ffb-b289-4adb-9191-ef4f119fb32d.png">

- GET ALL USERS `/api/users`
<img width="1088" alt="Captura de Tela 2023-04-12 às 21 23 20" src="https://user-images.githubusercontent.com/38231807/231576068-67bec66a-8f2a-4e8e-aeb5-e54a84d453a3.png">


- GET USER BY ID `/api/users/:id/`
<img width="1071" alt="endpoint-get-by-id" src="https://user-images.githubusercontent.com/38231807/231576323-7d2bfdb1-c738-4981-bf70-92d6d41362a6.png">


- PUT `/api/users/:id/`
```json
{
    "name": "Ana Rakel",
    "email": "rakelana@email.com"
}
```
<img width="1073" alt="endpoint-put" src="https://user-images.githubusercontent.com/38231807/231574930-d4be3aa2-7dfd-49d4-897c-348312aeac6e.png">

- DELETE `/api/users/:id/`

<img width="1071" alt="endpoint-delete" src="https://user-images.githubusercontent.com/38231807/231575429-1356e28e-e706-4d4b-81db-90e59168747d.png">
