const {models} = require('../database');

class CustomersService {
    async createCustomer(customer) {
        const newCustomer = await models.Customer.create(customer);
        return newCustomer;
    }

    async getAll() {
        const customers = await models.Customer.findAll();
        return customers;
    }

    async getOne(id) {
        const customer = await models.Customer.findByPk(id);
        return customer;
    }
}

module.exports = CustomersService;