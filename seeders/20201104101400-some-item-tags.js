"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "itemTags",
      [
        {
          itemId: 1,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          itemId: 2,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          itemId: 3,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("itemTags", null, {})
  },
}
