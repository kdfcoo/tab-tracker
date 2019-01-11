const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.json(songs)
    } catch (err) {
      res.status(400).send({
        error: 'System error'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.json(song)
    } catch (err) {
      res.status(400).send({
        error: 'System error'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.json(song)
    } catch (err) {
      res.status(400).send({
        error: 'System error'
      })
    }
  }
}
