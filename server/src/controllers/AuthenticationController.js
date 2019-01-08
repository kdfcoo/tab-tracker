const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      return res.json({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // console.log(user.toJSON())
      if (!user) {
        res.status(403).send({
          error: 'Invalid email address'
        })
      } else {
        if (!user.comparePassword(password)) {
          // 密码不匹配
          return res.status(403).json({
            error: 'Invalid password'
          })
        } else {
          // 匹配成功
          const userJson = user.toJSON()
          return res.json({
            user: userJson,
            token: jwtSignUser(userJson)
          })
        }
      }
    } catch (err) {
      res.status(500).send({
        error: 'System error'
      })
    }
  }
}
