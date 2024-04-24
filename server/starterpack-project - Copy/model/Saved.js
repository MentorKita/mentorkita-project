const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Saved = my_db.define("saved",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_mentee: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Saved;