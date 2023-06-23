// import { DataTypes, Model } from 'sequelize';
import { DataTypes, Model, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model>('categories_meals', {
      // idCategory: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   autoIncrement: true,
      //   // primaryKey: true,
      // },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      strCategoryThumb: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      strCategoryDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    },
    );
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories_meals');
  },
};
