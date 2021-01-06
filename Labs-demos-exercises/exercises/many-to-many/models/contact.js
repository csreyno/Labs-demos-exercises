'use strict';

// Contact is a junction table ("linking").


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  //1. first, tell sequelize that the INTEGER points to the  User's id field
  Contact.init({
    user_id: {
      type: DataTypes.INTEGER,
    references: {
      model:'User',
      //what does the user_id point to?
      key: 'id'
    }
  },
    contact_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};