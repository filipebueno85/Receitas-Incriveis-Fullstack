import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('categories_drinks', [
      {
        strCategory: "Ordinary Drink",
      },
      {
        strCategory: "Cocktail",
      },
      {
        strCategory: "Shake",
      },
      {
        strCategory: "Other / Unknown",
      },
      {
        strCategory: "Cocoa",
      },
      {
        strCategory: "Shot",
      },
      {
        strCategory: "Coffee / Tea",
      },
      {
        strCategory: "Homemade Liqueur",
      },
      {
        strCategory: "Punch / Party Drink",
      },
      {
        strCategory: "Beer",
      },
      {
        strCategory: "Soft Drink",
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories_drinks', {});
  },
}
