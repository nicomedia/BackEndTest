const {Cows} = require('../models')

module.exports = {
    async post (req, res) {
        try {
          const Cow = await Cows.create(req.body)
          
          res.send(Cow)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the Cow'
          })
        }
      },

      async get (req, res) {
        try {
          Cow = await Cows.findAll({
            limit: 100
          })
          res.send(Cow)
        }
        catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the Cow'
          })
        }
      },
      async show (req, res) {
        try {
          const Cow = await Cows.findAll(
            {
              where: {
                CowID: req.params.CowID
              }})
          res.send(Cow)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the Cow'
          })
        }
      },
      async put (req, res) {
        try {
          await Cows.update(req.body, {
            where: {
              id: req.params.CowID
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the Cow'
          })
        }
      },
      async remove (req, res) {
        try {
          const {CowID} = req.params
          const cow = await Cows.findOne({
            where: {
              CowID: {CowID}
            }
          })
          if (!cow) {
            return res.status(403).send({
              error: 'you do not have access to this Cow'
            })
          }
          await cow.destroy()
          res.send(cow)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to delete the Cow'
          })
        }
      }

}