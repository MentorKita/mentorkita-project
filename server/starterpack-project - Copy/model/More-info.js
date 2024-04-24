const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const More_info = my_db.define("more_info",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  experence: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  about: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lokasi: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = More_info;