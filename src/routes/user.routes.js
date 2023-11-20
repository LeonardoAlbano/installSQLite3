// Importando o objeto 'Router' do módulo 'express'.
const { Router } = require("express");

// Importando o controlador 'UserController' do arquivo '../controllers/UserController'.
const UserController = require("../controllers/UserController");

// Criando uma instância do objeto 'Router'.
const usersRoutes = Router();

// Criando uma instância do controlador 'UserController'.
const userController = new UserController();

// Definindo uma rota para a criação de usuários (método POST).
// Quando essa rota é acionada, o método 'create' do 'UserController' será chamado.
usersRoutes.post("/", userController.create);

// Exportando as rotas relacionadas aos usuários para serem utilizadas em outros arquivos.
module.exports = usersRoutes;
