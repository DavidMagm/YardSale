const {models} = require('../database')

class UsersService {
  constructor() {
    this.users = [];
  }

  async createUser(user) {
    const newUser = await models.Users.create(user);
    return newUser;
  }

  async getAll() {
    const users = await models.Users.findAll();
    return users;
  }

  async getOne(id) {
    const user = await models.User.findByPk(id);
    return user;
  }
}

module.exports = UsersService;