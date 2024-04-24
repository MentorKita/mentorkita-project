const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Course = require("../model/Course");

const CourseRelationship = sequelize.define("CourseRelationship", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_mentee: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  id_course: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});


module.exports = CourseRelationship;
