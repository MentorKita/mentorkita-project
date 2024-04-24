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
const Moreinfo = require("../model/Moreinfo");
const cloudinary = require("../util/cloudinary_config");
const fs = require("fs");

//RELASI DITARUH DISINI BELUM BENAR

//SEMISAL ADA TABEL ROLES
//User.hasMany(Role)
//Role.belongsTo(User)

//RELASI DITARUH DISINI
// Mentee.hasMany(Comment, { as: "Comments" });

// //Skills
// Mentee.belongsToMany(Skills, {
//   through: SkillsRelationship,
//   as: "MentorSkills",
//   foreignKey: "id_mentee",
// });
// Skills.belongsToMany(Mentee, {
//   through: SkillsRelationship,
//   as: "Skills",
//   foreignKey: "id_skills",
// });

// //Course
// Course.belongsToMany(Mentee, {
//   through: CourseRelationship,
//   as: "Mentees",
//   foreignKey: "id_course",
// });

// Mentee.belongsToMany(Course, {
//   through: CourseRelationship,
//   as: "Courses",
//   foreignKey: "id_mentee",
// });

// Mentee.belongsToMany(Mentor, { through: Saved, as: "SavedMentor" });

const association = async () => {
  try {
    await sequelize.sync({});
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = association;
