const {Sequelize} = require('sequelize')
const {config} = require('../config')

const {dbName, dbPassword, dbUser, dbHost, dbPort, dbDialect} = config

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect
})

module.exports = {sequelize}