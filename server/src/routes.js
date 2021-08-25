const CowController = require('./controllers/CowController')

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
}