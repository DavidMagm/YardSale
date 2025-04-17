const joi = require('joi');

const id = joi.number().min(1);
const name = joi.string().min(3);
const lastName = joi.string().min(3);
const phone = joi.string().min(10);
const userId = joi.number().min(1);
const email = joi.string().email();
const password = joi.string().min(6);

const createCustomerSchema = joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: joi.object({
        email: email.required(),
        password: password.required()
    })
});

const updateCustomerSchema = joi.object({
    name: name,
    lastName: lastName,
    phone: phone,
    userId: userId
});

const getCustomerSchema = joi.object({
    id: id.required()
});

module.exports = {
    createCustomerSchema,
    updateCustomerSchema,
    getCustomerSchema
}