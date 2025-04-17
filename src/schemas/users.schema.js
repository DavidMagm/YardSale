const joi = require('joi');

const id = joi.number().min(1);
const email = joi.string().email();
const password = joi.string().min(6);
const role = joi.string().valid('admin', 'user');

const createUserSchema = joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required()
});

const updateUserSchema = joi.object({
    email: email,
    password: password,
    role: role
});

const getUserSchema = joi.object({
    id: id.required()
});

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}