const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "anime",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        /* allowNull: false, */
      },

      description: {
        type: DataTypes.JSON,
        /* allowNull: false, */
      },

      episodes: {
        type: DataTypes.INTEGER,
      },

      status: {
        type: DataTypes.STRING,
      },

      rank: {
        type: DataTypes.REAL,
      },

      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: false,
    }
  );
};
