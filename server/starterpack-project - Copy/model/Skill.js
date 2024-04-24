const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Skill = my_db.define("skill",{
    id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_skill: {
        type: Sequelize.ENUM("Advertising","Branding","Back-End Developing","Front-End Developing","Enterpreneurship","Marketing","Project Managering","UX Design"),
        allowNull: false,
      }
  });
  
  module.exports = Skill;