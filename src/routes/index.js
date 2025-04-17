const router = require('express').Router();

const productsRouter = require('./products.route');
const categoriesRouter = require('./categories.route');
const usersRouter = require('./users.route');
const customersRouter = require('./customers.route');

function initRouter(app) {
  app.use('/store/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
}

module.exports = initRouter;