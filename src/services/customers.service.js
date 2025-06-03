const {models} = require('../database');

class CustomersService {
    async createCustomer(customer) {
        const newCustomer = await models.Customers.create(customer);
        return newCustomer;
    }

    async getAll() {
        const customers = await models.Customers.findAll();
        return customers;
    }

    async getOne(id) {
        const customer = await models.Customers.findByPk(id);
        return customer;
    }
}

module.exports = CustomersService;