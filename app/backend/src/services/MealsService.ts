import { Op } from 'sequelize';
import SequelizeCategoriesMeals from '../database/models/SequelizeCategoriesMeals';
import SequelizeMeals from '../database/models/SequelizeMeals';
import IMeal from '../interfaces/IMeal';
import IMealCategory from '../interfaces/IMealCategory';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';

export default class MealsService {
   static async getAllMeals(): Promise<ServiceResponse<IMeal[]>> {
    const meals = await SequelizeMeals.findAll();  
    return { status: 'SUCCESSFUL', data: meals };
  }

  public static async getMealByNameQuery(q: string): Promise<ServiceResponse<ServiceMessage | IMeal[]>> {
    let mealName = [];
    if (q.length === 0) {
      mealName = await SequelizeMeals.findAll();
    } else {
      mealName = await SequelizeMeals.findAll({
        where: {
        strMeal: {
            [Op.like]: `%${q}%`,
        },
        },
      });
    }
    if (mealName.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Meal ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: mealName };
  }

  public static async getMealsByLetterQuery(q: string): Promise<ServiceResponse<ServiceMessage | IMeal[]>> {
    let mealLetter = [];
  
    mealLetter = await SequelizeMeals.findAll({
        where: {
        strMeal: {
            [Op.like]: `${q}%`,
        },
      },
    });

    if (mealLetter.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Meal ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: mealLetter };
  }

  public static async getMealById(id: number): Promise<ServiceResponse<IMeal>> {
    const meal = await SequelizeMeals.findByPk(id);
    if (!meal) return { status: 'NOT_FOUND', data: { message: `Meal ${id} not found!` } };
    return { status: 'SUCCESSFUL', data: meal };
  }

  static async getByCategoryQuery(q: string): Promise<ServiceResponse<ServiceMessage | IMeal[]>> {
    const MealCategory = await SequelizeMeals.findAll({
      where: {
        strCategory: {
          [Op.like]: `%${q}%`,
        }
      }
    });

    if (MealCategory.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Category ${q} not found` } };
    }

    return { status: 'SUCCESSFUL', data: MealCategory };
  }

  public static async getMealsByIngredients(q: string): Promise<ServiceResponse<ServiceMessage | IMeal[]>> {
    let meals = [];
    if (q.length === 0) {
      meals = await SequelizeMeals.findAll();
    } else {
      meals = await SequelizeMeals.findAll({
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
            { strIngredient16: { [Op.like]: `%${q}%` } },
            { strIngredient17: { [Op.like]: `%${q}%` } },
            { strIngredient18: { [Op.like]: `%${q}%` } },
            { strIngredient19: { [Op.like]: `%${q}%` } },
            { strIngredient20: { [Op.like]: `%${q}%` } },
          ]
        },
      });
    }
    if (meals.length === 0) {
      return { status: 'NOT_FOUND', data: { message: `Meal ${q} not found` } };
    }
    return { status: 'SUCCESSFUL', data: meals };
  }

  // public static async getMealsByArea(): Promise<ServiceResponse<IMeal[]>> {
  //   const mealsArea = await SequelizeMeals.findAll({ attributes: ['strArea'] });
  
  //   if (!mealsArea) {
  //     return { status: 'NOT_FOUND', data: { message: 'Area not found' } };
  //   }
  
  //   const data = mealsArea.map((meal) => meal.toJSON() as IMeal);
  //   return { status: 'SUCCESSFUL', data };
  // }
  

  // public static async getMealByOneNameQuery(q: string): Promise<ServiceResponse<ServiceMessage | IMeal>> {
  //   const mealName = await SequelizeMeals.findOne({
  //     where: {
  //       strMeal: {
  //         [Op.like]: `%${q}%`,
  //       },
  //     },
  //   });
  //   if (!mealName) {
  //     return { status: 'NOT_FOUND', data: { message: `Meal ${q} not found` } };
  //   }
  //   return { status: 'SUCCESSFUL', data: mealName };
  // }
  public static async getCategories(): Promise<IMealCategory[]> {
    const categories = await SequelizeCategoriesMeals.findAll();
    return categories;
  }
}
