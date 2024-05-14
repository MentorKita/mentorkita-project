require("dotenv").config();
const sequelize = require("./db_connect");
const Mentee = require("../model/Mentee");
const Mentor = require("../model/Mentor");
const Saved = require("../model/Saved");
const Comment = require("../model/Komentar");
const Course = require("../model/Course");
const CourseRelationship = require("../model/CourseRelationship");
const Skills = require("../model/Skills");
const SkillsRelationship = require("../model/SkillsRelationship");
const Experience = require("../model/Experience");
const cloudinary = require("../util/cloudinary_config");
const fs = require("fs");

// Roles
Mentor.belongsToMany(Course, { through: CourseRelationship });
Course.belongsToMany(Mentor, { through: CourseRelationship });

Mentor.belongsToMany(Skills, { through: SkillsRelationship });
Skills.belongsToMany(Mentor, { through: SkillsRelationship });

Mentee.hasMany(Comment);
Comment.belongsTo(Mentee);

Mentor.hasMany(Experience);
Experience.belongsTo(Mentor);

Mentee.hasMany(Mentor);
Mentor.belongsTo(Mentee);

Mentee.belongsToMany(Mentor, { through: Saved });
Mentor.belongsToMany(Mentee, { through: Saved });

const association = async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = association;
