const router = require('express').Router();
const CustomersService = require('../services/customers.service');
const service = new CustomersService();

router.get('/',
    async (req, res) => {
        try {
            const customers = await service.getAll();
            res.json(customers);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
    }
});

router.get('/:id',
    async (req, res) => {
        try {
            const { id } = req.params;
            const customer = await service.getOne(id);
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

router.post('/',
    async (req, res) => {
        try {
            const customer = req.body;
            const newCustomer = await service.createCustomer(customer);
            res.json(newCustomer);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
});

module.exports = router;