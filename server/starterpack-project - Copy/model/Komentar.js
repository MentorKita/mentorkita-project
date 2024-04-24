const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Komentar = my_db.define("komentar",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  body_komentar: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Komentar;