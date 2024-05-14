const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Mentor = sequelize.define("mentor", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lokasi: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.DOUBLE,
  },
});

module.exports = Mentor;
