import { Request, Response } from 'express';
import MealsService from '../services/MealsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MealsController {
  static async getAllMeals(req: Request, res: Response) {
    const response = await MealsService.getAllMeals();
    return res.status(200).json(response);
  }

  public static async getMealById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await MealsService.getMealById(+id);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public static async getMealByNameQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await MealsService.getMealByNameQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    res.status(200).json(serviceResponse.data);
  }

  public static async getMealsByLetterQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await MealsService.getMealsByLetterQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    res.status(200).json(serviceResponse.data);
  }

  public static async getByCategoryQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await MealsService.getByCategoryQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    return res.status(200).json(serviceResponse.data);
  }

  public static async getMealsByIngredients(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await MealsService.getMealsByIngredients(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    return res.status(200).json(serviceResponse.data);
  }

  public static async getCategories(req: Request, res: Response) {
    const serviceResponse = await MealsService.getCategories();
    return res.status(200).json(serviceResponse);
  }
}
