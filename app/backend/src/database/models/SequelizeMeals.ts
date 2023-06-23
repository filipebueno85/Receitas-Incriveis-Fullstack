import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class SequelizeMeals extends Model<InferAttributes<SequelizeMeals>,
InferCreationAttributes<SequelizeMeals>> {
  declare idMeal: CreationOptional<number>;
  declare strMeal: string;
  declare strDrinkAlternate: string;
  declare strCategory: string;
  declare strArea: string;
  declare strInstructions: string;
  declare strMealThumb: string;
  declare strTags: string;
  declare strYoutube: string;
  declare strIngredient1: string;  
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strIngredient7: string;
  declare strIngredient8: string;
  declare strIngredient9: string;
  declare strIngredient10: string;
  declare strIngredient11: string;
  declare strIngredient12: string;
  declare strIngredient13: string;
  declare strIngredient14: string;
  declare strIngredient15: string;
  declare strIngredient16: string;
  declare strIngredient17: string;
  declare strIngredient18: string;
  declare strIngredient19: string;
  declare strIngredient20: string;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
  declare strMeasure7: string;
  declare strMeasure8: string;
  declare strMeasure9: string;
  declare strMeasure10: string;
  declare strMeasure11: string;
  declare strMeasure12: string;
  declare strMeasure13: string;
  declare strMeasure14: string;
  declare strMeasure15: string;
  declare strMeasure16: string;
  declare strMeasure17: string;
  declare strMeasure18: string;
  declare strMeasure19: string;
  declare strMeasure20: string;
  declare strSource: string;
  declare strImageSource: string;
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: string;
}

SequelizeMeals.init({
  idMeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  strMeal: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strDrinkAlternate: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strCategory: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strArea: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strInstructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strMealThumb: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strTags: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strYoutube: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient2: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient3: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient4: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient5: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient6: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient7: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient8: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient9: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient10: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient11: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient12: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient13: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient14: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient15: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient16: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient17: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient18: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient19: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strIngredient20: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure1: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure2: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure3: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure4: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure5: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure6: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure7: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure8: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure9: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure10: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure11: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure12: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure13: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure14: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure15: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure16: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure17: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure18: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure19: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strMeasure20: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strSource: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strImageSource: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strCreativeCommonsConfirmed: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  dateModified: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
}, {
  // underscored: true,
  sequelize: db,
  modelName: 'meals',
  timestamps: false,
});

export default SequelizeMeals;
