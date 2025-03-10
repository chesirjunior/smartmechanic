import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("automechanics_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Contact = sequelize.define("Contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Contact;