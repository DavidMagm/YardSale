const joi =  require('joi');

const id = joi.number().min(1);
const name = joi.string().min(3).max(30);
const image = joi.string().uri();

const createCategorySchema = joi.object({
    name: name.required(),
    image: image.required(),
});

const getCategorySchema = joi.object({
    id: id.required(),
});

const updateCategorySchema = joi.object({
    name,
    image,
});

module.exports = {
    createCategorySchema,
    getCategorySchema,
    updateCategorySchema,
};