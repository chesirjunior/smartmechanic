import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("automechanics_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Disable logging if you don't want to see SQL queries in the console
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

// Disable automatic synchronization
sequelize.sync({ alter: false });

export default Contact;