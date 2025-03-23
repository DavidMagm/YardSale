const router = require('express').Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

router.get('/', 
    async (req, res) => {
        try {
            const categories = await service.getAll();
            res.json(categories);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.get('/:id', 
    async (req, res) => {
        try {
            const { id } = req.params;
            const categories = await service.getOne(id);
            res.json(categories);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.post('/categories', 
    async (req, res) => {
        try {
            const category = req.body;
            const newCategory = await service.createCategory(category);
            res.json(newCategory);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});