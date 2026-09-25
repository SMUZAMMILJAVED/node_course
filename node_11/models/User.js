const { sequelize } = require("../config/db");
const {  DataTypes } = require('sequelize');
const User = sequelize.define(
  'User',
  {
    
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
     
    },
  },
  {
    // Other model options go here
  },
);

module.exports=User;