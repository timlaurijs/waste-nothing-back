"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "items",
      [
        {
          title: "chair",
          description: "Sits very well",
          imageSource:
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Library_Chair_dakota_jackson.jpg",
          city: "amsterdam",
          country: "netherlands",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          categoryId: 1,
        },
        {
          title: "toy car",
          description: "Plays very well",
          imageSource:
            "https://upload.wikimedia.org/wikipedia/commons/6/66/Red_car_toy.jpg",
          city: "amsterdam",
          country: "netherlands",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          categoryId: 4,
        },
        {
          title: "pan",
          description: "Cooks very well",
          imageSource:
            "https://upload.wikimedia.org/wikipedia/commons/1/11/Frying_pan.JPG",
          city: "wuhan",
          country: "china",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          categoryId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
