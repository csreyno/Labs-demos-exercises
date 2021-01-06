'use strict';
module.exports = {
  //"up" tells Postgres how to setup the table
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      //also avaialable: UUID
      // Universally Unique Identifier
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      hash: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //"down" tells Postgres hgow to tear down the table
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};