const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songId',
    isAuthenticated,
    SongsController.show)

  app.post('/songs',
    SongsController.post)
}
