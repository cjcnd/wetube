const Sequezile = require("sequelize");

module.exports = class User extends Sequezile.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequezile.STRING(20),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequezile.STRING(30),
        allowNull: false,
      },
      password: {
        type: Sequezile.STRING(30),
        allowNull: false,
      },
      video: {
        type: Sequezile.TEXT,
        allowNull: true,
      },
    });
  }
};
