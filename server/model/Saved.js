const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Saved = sequelize.define("Saved", {
  id_saved: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  mentee: {
    type: Sequelize.INTEGER,
    references: {
      model: "mentees",
      key: "id_mentee",
    },
  },
  mentor: {
    type: Sequelize.INTEGER,
    references: {
      model: "Mentors",
      key: "id_mentor",
    },
  },
});

module.exports = Saved;

module.exports = Saved;
