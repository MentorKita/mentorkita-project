const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Mentor = sequelize.define("Mentor", {
  id_mentor: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_mentee: {
    type: Sequelize.INTEGER,
    references: {
      model: "mentees",
      key: "id_mentee",
    },
  },
  rating: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Mentor;
