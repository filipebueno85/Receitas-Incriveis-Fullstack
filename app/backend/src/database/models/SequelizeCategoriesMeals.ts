import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import db from '.';

class SequelizeCategoriesMeals extends Model<InferAttributes<SequelizeCategoriesMeals>,
InferCreationAttributes<SequelizeCategoriesMeals>> {
  // declare idCategory: CreationOptional<number>;
  declare strCategory: string;
  declare strCategoryThumb: string;
  declare strCategoryDescription: string;
}

SequelizeCategoriesMeals.init({
  // idCategory: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   autoIncrement: true,
  //   // primaryKey: true,
  // },
  strCategory: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  strCategoryThumb: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strCategoryDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'categories_meals',
  timestamps: false,
});

export default SequelizeCategoriesMeals;
