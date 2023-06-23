import { Request, Response } from 'express';
import DrinksService from '../services/DrinksService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class DrinksController {
  static async getAllDrinks(req: Request, res: Response) {
    const response = await DrinksService.getAllDrinks();
    return res.status(200).json(response);
  }

  public static async getDrinkById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await DrinksService.getDrinkById(+id);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public static async getDrinkByNameQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await DrinksService.getMealByNameQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    res.status(200).json(serviceResponse.data);
  }

  public static async getByCategoryQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await DrinksService.getByCategoryQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    return res.status(200).json(serviceResponse.data);
  }

  public static async getDrinksByLetterQuery(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await DrinksService.getDrinksByLetterQuery(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    res.status(200).json(serviceResponse.data);
  }

  public static async getDrinksByIngredients(req: Request, res: Response) {
    const { q } = req.query;
  
    const serviceResponse = await DrinksService.getDrinksByIngredients(q as string);
  
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
  
    return res.status(200).json(serviceResponse.data);
  }

  public static async getCategories(req: Request, res: Response) {
    const serviceResponse = await DrinksService.getCategories();
    return res.status(200).json(serviceResponse);
  }
}
