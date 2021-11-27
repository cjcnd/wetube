const Sequelize = require("sequelize");

module.exports = class Video extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(30),
          allowNull: false,
          unique: true,
        },
        thumbnail: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        video: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        comment: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        create_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Video",
        tableName: "videos",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
