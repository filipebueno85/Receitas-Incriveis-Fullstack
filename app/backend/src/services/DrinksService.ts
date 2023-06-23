import { Op } from 'sequelize';
import SequelizeCategoriesDrinks from '../database/models/SequelizeCategoriesDrinks';
import SequelizeDrinks from '../database/models/SequelizeDrinks';
import IDrink from '../interfaces/IDrink';
import IDrinkCategory from '../interfaces/IDrinkCategory';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';

export default class DrinksService {
  static getAllDrinks(): Promise<IDrink[]> {
    return SequelizeDrinks.findAll();
  }

  public static async getDrinkById(id: number): Promise<ServiceResponse<IDrink>> {
    const meal = await SequelizeDrinks.findByPk(id);
    if (!meal) return { status: 'NOT_FOUND', data: { message: `Meal ${id} not found!` } };
    return { status: 'SUCCESSFUL', data: meal };
  }


  public static async getMealByNameQuery(q: string): Promise<ServiceResponse<ServiceMessage | IDrink[]>> {
    let drinkName = [];
    if (q.length === 0) {
      drinkName = await SequelizeDrinks.findAll();
    } else {
      drinkName = await SequelizeDrinks.findAll({
        where: {
        strDrink: {
            [Op.like]: `%${q}%`,
        },
        },
      });
    }
    if (drinkName.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Drink ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: drinkName };
  }

  static async getByCategoryQuery(q: string): Promise<ServiceResponse<ServiceMessage | IDrink[]>> {
    const drinkCategory = await SequelizeDrinks.findAll({
      where: {
        strCategory: {
          [Op.like]: `%${q}%`,
        }
      }
    });

    if (drinkCategory.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Category ${q} not found` } };
    }

    return { status: 'SUCCESSFUL', data: drinkCategory };
  }

  public static async getDrinksByLetterQuery(q: string): Promise<ServiceResponse<ServiceMessage | IDrink[]>> {
    let drinkLetter = [];
  
    drinkLetter = await SequelizeDrinks.findAll({
        where: {
        strDrink: {
            [Op.like]: `${q}%`,
        },
      },
    });

    if (drinkLetter.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Meal ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: drinkLetter };
  }

  public static async getDrinksByIngredients(q: string): Promise<ServiceResponse<ServiceMessage | IDrink[]>> {
    let drinks = [];
    if (q.length === 0) {
      drinks = await SequelizeDrinks.findAll();
    } else {
      drinks = await SequelizeDrinks.findAll({
        where: {
          [Op.or]: [
            { strIngredient1: { [Op.like]: `%${q}%` } },
            { strIngredient2: { [Op.like]: `%${q}%` } },
            { strIngredient3: { [Op.like]: `%${q}%` } },
            { strIngredient4: { [Op.like]: `%${q}%` } },
            { strIngredient5: { [Op.like]: `%${q}%` } },
            { strIngredient6: { [Op.like]: `%${q}%` } },
            { strIngredient7: { [Op.like]: `%${q}%` } },
            { strIngredient8: { [Op.like]: `%${q}%` } },
            { strIngredient9: { [Op.like]: `%${q}%` } },
            { strIngredient10: { [Op.like]: `%${q}%` } },
            { strIngredient11: { [Op.like]: `%${q}%` } },
            { strIngredient12: { [Op.like]: `%${q}%` } },
            { strIngredient13: { [Op.like]: `%${q}%` } },
            { strIngredient14: { [Op.like]: `%${q}%` } },
            { strIngredient15: { [Op.like]: `%${q}%` } },
          ]
        },
      });
    }
    if (drinks.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Drink ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: drinks };
  }

  public static async getCategories(): Promise<IDrinkCategory[]> {
    const categories = await SequelizeCategoriesDrinks.findAll();
    return categories;
  }
}