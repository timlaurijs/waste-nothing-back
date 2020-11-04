"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Furniture",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kitchen",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Toys",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {})
  },
}
