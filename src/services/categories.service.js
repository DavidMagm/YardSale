const {models} = require('../database');

class CategoriesService {
    async createCategory(category) {
        const newCategory = await models.Category.create(category);
        return newCategory;
    }

    async getAll() {
        const categories = await models.Category.findAll();
        return categories;
    }

    async getOne(id) {
        const category = await models.Category.findByPk(id);
        return category;
    }
}

module.exports = CategoriesService;