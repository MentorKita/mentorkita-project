const sequelize = require("../util/db_connect");
const Sequelize = require("sequelize");

const Moreinfo = sequelize.define("Moreinfo", {
  id_moreinfo: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  lokasi: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  job: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  about: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Moreinfo;
