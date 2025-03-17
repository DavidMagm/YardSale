const joi =  require('joi');

const id = joi.number().min(1);
const name = joi.string().min(3).max(30);
const price = joi.number().min(0);
const description = joi.string().min(10).max(100);

const createProductSchema = joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
});

const getProductSchema = joi.object({
    id: id.required(),
});

const updateProductSchema = joi.object({
    name: name,
    price: price,
    description: description,
});

module.exports = {
    createProductSchema,
    getProductSchema,
    updateProductSchema,
};