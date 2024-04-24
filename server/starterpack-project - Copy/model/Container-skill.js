const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Container_skill = my_db.define("container_skill",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Container_skill;