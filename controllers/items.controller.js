let productModel = require('../models/items.model');

function getAllItems(req, res) {
    res.json(productModel);
}

module.exports = {getAllItems};

