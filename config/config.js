const {config} = require('../config')

module.exports = {
    develoment: {
        dbName: config.dbName,
        dbUser: config.dbUser,
        dbPassword: config.dbPassword,
        dbHost: config.dbHost,
        dbPort: config.dbPort,
        dbDialect: config.dbDialect
    },
    production: {
        dbName: config.dbName,
        dbUser: config.dbUser,
        dbPassword: config.dbPassword,
        dbHost: config.dbHost,
        dbPort: config.dbPort,
        dbDialect: config.dbDialect 
    }
}