'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Product_sizes', [
      {
        product_id: 1,
        size_id: 1,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        product_id: 1,
        size_id: 2,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        product_id: 1,
        size_id: 3,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 1,
        size_id: 6,
        amount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        size_id: 2,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        size_id: 4,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        size_id: 5,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        size_id: 6,
        amount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        size_id: 11,
        amount: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        size_id: 12,
        amount: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        size_id: 13,
        amount: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        size_id: 14,
        amount: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        size_id: 16,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        size_id: 17,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        size_id: 13,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        size_id: 15,
        amount: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        size_id: 5,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        size_id: 6,
        amount: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        size_id: 7,
        amount: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        size_id: 3,
        amount: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        size_id: 2,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        size_id: 1,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        size_id: 1,
        amount: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        size_id: 5,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        size_id: 4,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        size_id: 5,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        size_id: 2,
        amount: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        size_id: 10,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        size_id: 9,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        size_id: 14,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        size_id: 12,
        amount: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        size_id: 4,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 11,
        size_id: 5,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 12,
        size_id: 4,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        product_id: 12,
        size_id: 5,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 13,
        size_id: 6,
        amount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 13,
        size_id: 5,
        amount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 14,
        size_id: 3,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 14,
        size_id: 2,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 15,
        size_id: 12,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 15,
        size_id: 9,
        amount: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 16,
        size_id: 16,
        amount: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        product_id: 16,
        size_id: 17,
        amount: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Product_sizes', null, {});

  }
};
