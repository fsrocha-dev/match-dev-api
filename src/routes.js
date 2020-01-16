const { Router } = require("express");
const UserController = require("./controllers/UserController");

const routes = Router();

//Cadastrar novo usuário
routes.post("/users", UserController.store);

module.exports = routes;
