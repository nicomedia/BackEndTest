const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
const mqttConn = require('./mqttConn')
const fileUpload = require('express-fileupload');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())


require('./routes')(app)
app.get('/status', (req,res) =>{
    res.send({
        message: 'hello world'
    })
})

// file upload api
app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`C:/Users/MFO/Desktop/FINTES/vue-black-dashboard-pro-v1.3.0/vue-black-dashboard-pro-v1.3.0/public/img/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

mqttConn.connect()

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || 8085)

    console.log('Server started on port :' + config.port)
    })


