const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Container_course = my_db.define("container_course",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Container_course;