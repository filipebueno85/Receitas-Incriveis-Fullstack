import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class SequelizeCategoriesDrinks extends Model<InferAttributes<SequelizeCategoriesDrinks>,
InferCreationAttributes<SequelizeCategoriesDrinks>> {
declare strCategory: string;
}

SequelizeCategoriesDrinks.init({
  // idCategory: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  strCategory: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  }, {
  sequelize: db,
  modelName: 'categories_drinks',
  timestamps: false,
});

export default SequelizeCategoriesDrinks;
