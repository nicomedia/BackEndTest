const {Milks} = require('../models')

module.exports = {
    async post (req, res) {
        try {
          const Milk = await Milks.create(req.body)
          
          res.send(Milk)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the Milk'
          })
        }
      },

      async get (req, res) {
        try {
          Milk = await Milks.findAll({
            limit: 100000
          })
          res.send(Milk)
        }
        catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the Milk'
          })
        }
      },
      async show (req, res) {
        try {
          const Milk = await Milks.findAll(
            {
              where: {
                CowID: req.params.CowID
              }})
          res.send(Milk)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the Milk'
          })
        }
      },
      async put (req, res) {
        try {
          await Milks.update(req.body, {
            where: {
              id: req.params.CowID
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the Milk'
          })
        }
      },
      async remove (req, res) {
        try {
          const {CowID} = req.params
          const Milk = await Milks.findOne({
            where: {
              CowID: {CowID}
            }
          })
          if (!Milk) {
            return res.status(403).send({
              error: 'you do not have access to this Milk'
            })
          }
          await Milk.destroy()
          res.send(Milk)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to delete the Milk'
          })
        }
      }

}