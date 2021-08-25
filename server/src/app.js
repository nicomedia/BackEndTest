const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)
app.get('/status', (req,res) =>{
    res.send({
        message: 'hello world'
    })
})

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 8085)

    console.log('Server started on port :' + config.port)
    })
