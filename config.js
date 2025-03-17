const dotenv = require('dotenv');
dotenv.config();

const config = {
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbDialect: process.env.DB_DIALECT,
}

module.exports = {config};