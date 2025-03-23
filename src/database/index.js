const {Sequelize} = require('sequelize')
const initModels = require('../../models')
const {config} = require('../../config')

const {dbName, dbPassword, dbUser, dbHost, dbPort, dbDialect} = config

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: dbDialect
})

initModels(sequelize)

module.exports = {sequelize}