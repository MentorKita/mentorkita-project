require("dotenv").config();
// const Division = require("../model/Division");
// const User = require("../model/User");

const Skill = require("../model/Skill");
const Course = require("../model/Course");
const Komentar = require("../model/Komentar");
const Mentee = require("../model/Mentee");
const More_info = require("../model/More-info");
const Mentor = require("../model/Mentor");
const Saved = require("../model/Saved");
const Container_skill = require("../model/Container-skill");
const Container_course = require("../model/Container-course");

const my_db = require("./connect_db");
const bcrypt = require("bcrypt");

const skill = [
  { name_skill : "Advertising" },
  { name_skill : "Branding" },
  { name_skill : "Back-End Developing" },
  { name_skill : "Front-End Developing" },
  { name_skill : "Enterpreneurship" },
  { name_skill : "Marketing" },
  { name_skill : "Project Managering" },
  { name_skill : "UX Design" }
];

const adminPassword = process.env.ADMIN_PWD;
const hashedPwd = bcrypt.hashSync(adminPassword, 10);

const admin = {
  fullName: process.env.ADMIN_FULLNAME,
  phone: process.env.ADMIN_PHONE,
  email: process.env.ADMIN_EMAIL,
  password: hashedPwd,
  id_moreinfo: 1
};

//one to many Division to User
// Division.hasMany(User);
// User.belongsTo(Division);

Mentee.belongsToMany(Course,{through: Container_course});
Course.belongsToMany(Mentee,{through: Container_course});

Mentee.belongsToMany(Skill,{through: Container_skill});
Skill.belongsToMany(Mentee,{through: Container_skill});

Mentee.hasMany(Komentar);
Komentar.belongsTo(Mentee);

More_info.hasOne(Mentee);
Mentee.belongsTo(More_info);

Mentee.hasMany(Mentor);
Mentor.belongsTo(Mentee);

Mentee.belongsToMany(Mentor, {through: Saved});
Mentor.belongsToMany(Mentee, {through: Saved});

const association = async () => {
  try {
    await my_db.sync({ force: false });
    Skill.bulkCreate(skill);
    await Mentee.create(admin);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = association;
