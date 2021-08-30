const {Accelerometers} = require('../models')

module.exports = {
    async post (req, res) {
        try {
          const Accelerometer = await Accelerometers.create(req.body)
          
          res.send(Accelerometer)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the Accelerometer'
          })
        }
      },

      async get (req, res) {
        try {
          Accelerometer = await Accelerometers.findAll({
            limit: 100
          })
          res.send(Accelerometer)
        }
        catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the Accelerometer'
          })
        }
      },
      async show (req, res) {
        try {
          const Accelerometer = await Accelerometers.findAll(
            {
              where: {
                CowID: req.params.CowID
              }})
          res.send(Accelerometer)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the Accelerometer'
          })
        }
      },
      async put (req, res) {
        try {
          await Accelerometers.update(req.body, {
            where: {
              CowID: req.params.CowID
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the Accelerometer'
          })
        }
      },
      async remove (req, res) {
        try {
          const {CowID} = req.params
          const Accelerometer = await Accelerometers.findOne({
            where: {
              CowID: {CowID}
            }
          })
          if (!Accelerometer) {
            return res.status(403).send({
              error: 'you do not have access to this Accelerometer'
            })
          }
          await Accelerometer.destroy()
          res.send(Accelerometer)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to delete the Accelerometer'
          })
        }
      }

}