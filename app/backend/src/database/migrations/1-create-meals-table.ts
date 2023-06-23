// import { DataTypes, Model } from 'sequelize';
import { DataTypes, Model, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('meals', {
      idMeal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strDrinkAlternate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strArea: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strInstructions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      strMealThumb: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strTags: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strYoutube: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient17: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient18: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient19: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strIngredient20: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure13: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure14: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure15: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure16: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure17: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure18: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure19: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strMeasure20: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strSource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strImageSource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCreativeCommonsConfirmed: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateModified: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meals');
  },
};
