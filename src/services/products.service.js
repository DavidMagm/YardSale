class ProductsService {
  constructor() {
    this.products = [];
  }

  async createProduct(product) {
    this.products.push(product);
  }

  async getAll() {
    return this.products;
  }

  async getOne(id) {
    return this.products.find(product => product.id === id);
  }
}

module.exports = ProductsService;