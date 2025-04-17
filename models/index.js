const {CategoriesModel, Categories} = require('./categories.model')
const {ProductsModel, Products} = require('./products.model')
const {CustomersModel, Customers} = require('./customers.model')
const {UsersModel, Users} = require('./users.model')

function initModels(sequelize) {
    Users.init(UsersModel, Users.config(sequelize))
    Customers.init(CustomersModel, Customers.config(sequelize))
    Categories.init(CategoriesModel, Categories.config(sequelize))
    Products.init(ProductsModel, Products.config(sequelize))

    Users.associate(sequelize.models)
    Customers.associate(sequelize.models)
    Categories.associate(sequelize.models)
    Products.associate(sequelize.models)
}

module.exports = initModels