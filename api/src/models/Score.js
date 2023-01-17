const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "score",
    {
      mean_score: {
        type: DataTypes.REAL,
        /* allowNull: false, */
      },
    },
    {
      timestamps: false,
    }
  );
};
