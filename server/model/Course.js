const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Course = sequelize.define("course", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_course: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Course;
