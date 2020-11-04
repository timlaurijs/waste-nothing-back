"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tags",
      [
        {
          name: "need repair",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {})
  },
}
