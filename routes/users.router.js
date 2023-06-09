const express = require('express');

const usersController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.post('/signup', usersController.addUser);
userRouter.get('/getUsers', usersController.getAllUsers);


module.exports = userRouter;