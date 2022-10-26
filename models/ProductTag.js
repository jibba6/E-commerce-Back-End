const { INTEGER } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      Type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    product_id:{
      Type:DataTypes.INTEGER,
        modelName: 'product_id',
    },
    tag_id:{
      Type:DataTypes.INTEGER,
      modeName:'tag_id'
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
