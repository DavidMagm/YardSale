const router = require('express').Router();
const UsersService = require('../services/users.service');
const service = new UsersService();

router.get('/',
    async (req, res) => {
        try {
            const users = await service.getAll();
            res.json(users);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
    }
});

router.get('/:id',
    async (req, res) => {
        try {
            const { id } = req.params;
            const user = await service.getOne(id);
            res.json(user);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.post('/',
    async (req, res) => {
        try {
            const user = req.body;
            const newUser = await service.createUser(user);
            res.json(newUser);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

module.exports = router;