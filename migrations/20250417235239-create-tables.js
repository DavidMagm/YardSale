'use strict';

const {UserModel} = require('../models/users.model');
const {ProductModel} = require('../models/products.model');
const {CategoryModel} = require('../models/categories.model');
const {CustomerModel} = require('../models/customers.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users', UserModel);
    queryInterface.createTable('customers', CustomerModel);
    queryInterface.createTable('categories', CategoryModel);
    queryInterface.createTable('products', ProductModel);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
    queryInterface.dropTable('customers');
    queryInterface.dropTable('categories');
    queryInterface.dropTable('products');
  }
};
