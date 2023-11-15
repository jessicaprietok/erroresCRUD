/*
En este archivo se trabaja la lógica para responder las peticiones al servidor
*/
const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", userController.createUser);

userRouter.post("/:id", userController.updateUser); 
 /*

// Cambia la ruta para el método DELETE
userRouter.delete("/:id", userController.deleteUser);
*/
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
