const router = require('express').Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', 
  async (req, res) => {
    try {
        const products = await service.getAll();
        res.json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', 
    async (req, res) => {
        try {
            const { id } = req.params;
            const product = await service.getOne(id);
            res.json(product);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.post('/', 
    async (req, res) => {
        try {
            const product = req.body;
            const newProduct = await service.createProduct(product);
            res.json(newProduct);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.put('/:id', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;