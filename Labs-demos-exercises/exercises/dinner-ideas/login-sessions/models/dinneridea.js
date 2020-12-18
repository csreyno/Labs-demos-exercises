'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dinnerIdea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dinnerIdea.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
      });
  }
};
  dinnerIdea.init({
    mainCourse: DataTypes.STRING,
    dessert: DataTypes.STRING,
    drink: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dinnerIdea',
  });
  return dinnerIdea;
};