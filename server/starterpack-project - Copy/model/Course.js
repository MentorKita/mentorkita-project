const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Course = my_db.define("course",{
    id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_course: {
        type: Sequelize.STRING,
        allowNull: false,
      }
  });
  
  module.exports = Course;