const router = require('express').Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

router.get('/', (req, res) => {
    res.json(service.getAll());
});

router.get('/categories', (req, res) => {
    const { id } = req.params;
    res.json(service.getOne(id));
});

router.post('/categories', (req, res) => {
    const { body } = req.body;
    res.json(service.createCategory(body));
});