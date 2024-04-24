const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Mentor = my_db.define("mentor",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  rating: {
    type: Sequelize.ENUM('1', '2', '3', '4', '5'),
    allowNull: false,
  }
});

module.exports = Mentor;