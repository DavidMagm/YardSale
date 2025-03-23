const {CategoriesModel, Categories} = require('./categories.model')
const {ProductsModel, Products} = require('./products.model')

function initModels(sequelize) {
    Categories.init(CategoriesModel, Categories.config(sequelize))
    Products.init(ProductsModel, Products.config(sequelize))
}

module.exports = initModels