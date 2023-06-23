import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class SequelizeDrinks extends Model<InferAttributes<SequelizeDrinks>,
InferCreationAttributes<SequelizeDrinks>> {
  declare idDrink: CreationOptional<number>;
  declare strDrink: string;
  declare strDrinkAlternate: string;
  declare strTags: string;
  declare strVideo: string;
  declare strCategory: string;
  declare strIBA: string;
  declare strAlcoholic: string;
  declare strGlass: string;
  declare strInstructions: string;
  declare strInstructionsES: string;
  declare strInstructionsDE: string;
  declare strInstructionsFR: string;
  declare strInstructionsIT: string;
  declare strInstructionsZhHans: string;
  declare strInstructionsZhHant: string;
  declare strDrinkThumb: string;
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
  declare strImageSource: string;
  declare strImageAttribution: string;
  declare strCreativeCommonsConfirmed: string;
  declare dateModified: string;
}

SequelizeDrinks.init({
  idDrink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  strDrink: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strDrinkAlternate: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strTags: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strVideo: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  strCategory: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  strIBA: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  strAlcoholic: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  strGlass: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  strInstructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strInstructionsES: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strInstructionsDE: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strInstructionsFR: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strInstructionsIT: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  strInstructionsZhHans: {
    type: DataTypes.TEXT,
    allowNull: true,
    // field: 'strInstructionsZH_HANS',
  },
  strInstructionsZhHant: {
    type: DataTypes.TEXT,
    allowNull: true,
    // field: 'strInstructionsZH_HANT'
  },
  strDrinkThumb: {
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
  strImageSource: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  strImageAttribution: {
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
  },
}, {
  sequelize: db,
  modelName: 'drinks',
  // underscored: true,
  timestamps: false,
});

export default SequelizeDrinks;
