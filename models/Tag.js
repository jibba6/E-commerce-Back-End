const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id:{
     Type:DataTypes.INTEGER,
     allowNull:false,
     primaryKey:true,
     autoIncrement:true
      },
      tage_name:{
        Type:DataTypes.String,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
