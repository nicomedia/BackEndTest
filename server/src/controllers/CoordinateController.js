const {Coordinates} = require('../models')

module.exports = {
    async post (req, res) {
        try {
          const Coordinate = await Coordinates.create(req.body)
          
          res.send(Coordinate)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the Coordinate'
          })
        }
      },

      async get (req, res) {
        try {
          Coordinate = await Coordinates.findAll({
            limit: 100000
          })
          res.send(Coordinate)
        }
        catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the Coordinate'
          })
        }
      },
      async show (req, res) {
        try {
          const Coordinate = await Coordinates.findAll(
            {
              where: {
                cowID: req.params.CowID
              }})
          res.send(Coordinate)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the Coordinate'
          })
        }
      },
      async put (req, res) {
        try {
          await Coordinates.update(req.body, {
            where: {
              CowID: req.params.CowID
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the Coordinate'
          })
        }
      },
      async remove (req, res) {
        try {
          const {CowID} = req.params
          const Coordinate = await Coordinates.findOne({
            where: {
              CowID: {CowID}
            }
          })
          if (!Coordinate) {
            return res.status(403).send({
              error: 'you do not have access to this Coordinate'
            })
          }
          await Coordinate.destroy()
          res.send(Coordinate)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to delete the Coordinate'
          })
        }
      }

}