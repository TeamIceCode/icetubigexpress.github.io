const express = require('express');
const productsController = require('../controllers/items.controller');
const itemsRouter = express.Router();

itemsRouter.get('/getAllItems', productsController.getAllItems);

module.exports = itemsRouter