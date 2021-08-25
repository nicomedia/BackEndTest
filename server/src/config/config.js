const path = require('path')

module.exports = {
    port: process.env.PORT || 8085,
    db: {
        database: process.env.DB_NAME || 'FINTES',
        user: process.env.DB_USER || 'FINTES',
        password: process.env.DB_PASS || 'FINTES',
        options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: path.resolve(__dirname, '../../FINTES.sqlite')
        }
    }
}