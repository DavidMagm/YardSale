const {config} = require('../config')

module.exports = {
    development: {
        username: config.dbUser,
        database: config.dbName,
        password: config.dbPassword,
        host: config.dbHost,
        dialect: 'postgres'
    },
    production: {
        username: config.dbUser,
        database: config.dbName,
        password: config.dbPassword,
        host: config.dbHost,
        dialect: 'postgres'
    }
}