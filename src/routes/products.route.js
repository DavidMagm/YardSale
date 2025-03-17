const router = require('express').Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', (req, res) => {
  res.json(service.getAll());
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(service.getOne(id));
});

router.post('/', (req, res) => {
    const { body } = req.body;
    res.json(service.createProduct(body));
});

router.put('/:id', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;