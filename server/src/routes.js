const CowController = require('./controllers/CowController')
const CoordinateController = require('./controllers/CoordinateController')
const AccelerometerController = require('./controllers/AccelerometerController')
const MilkController = require('./controllers/MilkController')

module.exports = (app) => {
    app.get('/status', (req,res) =>{
        res.send({
            message: 'hello world'
        })
    }),
    app.get('/cows',CowController.get)
    app.post('/cows',CowController.post)
    app.get('/cows/:CowID', CowController.show)
    app.put('/cows/:CowID', CowController.put)
    app.delete('/cows/:CowID', CowController.remove)

    app.get('/coordinate',CoordinateController.get)
    app.post('/coordinate',CoordinateController.post)
    app.get('/coordinate/:CowID', CoordinateController.show)
    app.put('/coordinate/:CowID', CoordinateController.put)
    app.delete('/coordinate/:CowID', CoordinateController.remove)

    app.get('/accelerometer',AccelerometerController.get)
    app.post('/accelerometer',AccelerometerController.post)
    app.get('/accelerometer/:CowID', AccelerometerController.show)
    app.put('/accelerometer/:CowID', AccelerometerController.put)
    app.delete('/accelerometer/:CowID', AccelerometerController.remove)

    app.get('/milk',MilkController.get)
    app.post('/milk',MilkController.post)
    app.get('/milk/:CowID', MilkController.show)
    app.put('/milk/:CowID', MilkController.put)
    app.delete('/milk/:CowID', MilkController.remove)
}