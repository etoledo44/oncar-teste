# Teste para vaga Fullstack Node.js na OnCar

Teste realizado para confirmar interesse na vaga de fullstack node.js. Teste prático em forma de desafio prosposto pela OnCar.
___

## Instruções para executação do código
1. Clone ou baixe o arquivo do repositório;
2. Em seu ambiente de desenvolvimento execute:
```
npm install ou yarn add
//Comando para baixar os pacotes utilizados no desenvolvimento.
```
3. Em seu gerenciador de banco de dados crie um novo banco de dados utilizando o código abaixo, ou pode executar o arquivo sql que está na raiz do projeto:
```
CREATE DATABASE IF NOT EXISTS `oncar` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `oncar`;
```
4. Execute o comando para executar as migrações:
```
npx knex migrate:latest   
```
5. Execute o comando para popular a tabela:
```
npx knex seed:run   
```

6. Acesse `localhost:3333/veiculos` para abrir o sistema no navegador.

___
## Backend
O backend foi desenvolvido para atender necessidades de um CRUD, com métodos **GET**, **POST**, **PUT**, **DELETE**. O backend possui um **Controller** responsável pela execução dos métodos, e possui as **Actions** seguindo um padrão:
- Index: Listar dados;
- Show: Listar um especifico;
- Create: Criar um item;
- Update: Atualizar um dado;
- Delete: Deletar um dado.

Foram utilizadas algumas ferramentas para auxiliar no desenvolvimento, citadas logo abaixo:
- [Insomnia](https://insomnia.rest/download/): Ferramenta para testar API, APIRest, permite enviar requisições, e receber respostas;
- [HeidiSQL](https://www.heidisql.com/download.php): Gerenciador de banco de dados MySQL;
- [Xampp](https://www.apachefriends.org/pt_br/download.html): Software que permite criar um host para desenvolvimento, contando com o MySQL;
- [Postman](https://www.postman.com/downloads/): Ferramenta de testar API, porém, foi utilizada para documentar a API.

O projeto conta com pacotes essencias para o desenvolvimento produtivo, como:
- Express: Pacote responsável por fazer o roteamento da aplicação;
- Knex: Query Builder, um construtor de query, a escrita é feita em JavaScript, e o Knex faz a conversão para sql query;
- Cors: Pacote que abre a aplicação para ser acessada por qualquer um.

___
## Frontend
O frontend da aplicação está acoplada ao backend, isso é, o próprio backend é responsável pela renderização da view. Por estar acoplado ao back, foi utilizado a view engine EJS(Embed JavaScript), pacote que permite injetar dados do backend para o frontend. Além disso, foram utilizados outras bibliotecas para auxiliar, como:
- [Bootstrap](https://www.bootstrapcdn.com/): Biblioteca de estilos já criados, possibilita desenvolvimento mais agil, acessado por cdn;
- [Jquery](https://code.jquery.com/): Biblioteca que simplifica o manuseio na DOM, acessado por cdn.

> **Problema**: por conta do EJS não foi possível separar o arquivo .js do html, pois, o mesmo não estava reconhecendo arquivos externos.

___
### [Documentação da API](https://documenter.getpostman.com/view/12149625/T1DpBwtH)



