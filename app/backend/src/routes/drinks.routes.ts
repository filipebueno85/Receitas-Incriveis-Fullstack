import { Request, Response, Router } from 'express';
import DrinksController from '../controllers/DrinksController';

const router = Router();

router.get('/', (req: Request, res: Response) => DrinksController.getAllDrinks(req, res));

router.get(
  '/name',
 (req: Request, res: Response) => DrinksController.getDrinkByNameQuery(req, res),
);

router.get(
  '/letter',
  (req: Request, res: Response) => DrinksController.getDrinksByLetterQuery(req, res),
);

router.get(
  '/ingredient',
  (req: Request, res: Response) => DrinksController.getDrinksByIngredients(req, res),
);

router.get(
  '/category',
  (req: Request, res: Response) => DrinksController.getByCategoryQuery(req, res),
);

router.get(
  '/area'
  // (req: Request, res: Response) => (req, res),
);

router.get(
  '/random'
  // (req: Request, res: Response) => (req, res),
);

router.get(
  '/categories',
  (req: Request, res: Response) => DrinksController.getCategories(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => DrinksController.getDrinkById(req, res),
);

router.get(
  '/areas',
  // (req: Request, res: Response) => (req, res),
);

router.get(
  '/ingredients'
  // (req: Request, res: Response) => (req, res),
);

export default router;