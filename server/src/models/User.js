const bcryptjs = require('bcryptjs')

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  const hash = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(SALT_FACTOR))
  user.password = hash

  // // 随机生成盐
  // bcryptjs.genSalt(SALT_FACTOR, function (err, salt) {
  //   if (err) return console.error(err)
  //   // 加盐哈希
  //   bcryptjs.hash(user.password, salt, function (err, hash) {
  //     if (err) return console.error(err)
  //     user.password = hash
  //   })
  // })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcryptjs.compareSync(password, this.password)
  }

  return User
}
