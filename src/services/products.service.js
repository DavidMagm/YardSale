const {models} = require('../database')

class ProductsService {
  constructor() {
    this.products = [];
  }

  async createProduct(product) {
    const newProduct = await models.Product.create(product);
    return newProduct;
  }

  async getAll() {
    const products = await models.Product.findAll();
    return products;
  }

  async getOne(id) {
    const product = await models.Product.findByPk(id);
    return product;
  }
}

module.exports = ProductsService;