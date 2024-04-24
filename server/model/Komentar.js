const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Komentar = sequelize.define("Komentar", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  id_mentee: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Komentar;
