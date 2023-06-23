import { DataTypes, Model, QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model>('categories_drinks', {
        // idCategory: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   autoIncrement: true,
        //   primaryKey: true,
        // },
        strCategory: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        // {
        //   primaryKey: false,
        // },
        
      });
    },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('categories_drinks');
  },
}