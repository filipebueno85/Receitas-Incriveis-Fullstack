import { Request, Response, Router } from 'express';
import MealsController from '../controllers/MealsController';

const router = Router();


router.get(
  '/name',
  (req: Request, res: Response) => MealsController.getMealByNameQuery(req, res),
  );
  
router.get('/', (req: Request, res: Response) => MealsController.getAllMeals(req, res));

router.get(
  '/letter',
  (req: Request, res: Response) => MealsController.getMealsByLetterQuery(req, res),
);

router.get(
  '/ingredient',
  (req: Request, res: Response) => MealsController.getMealsByIngredients(req, res),
);

router.get(
  '/category',
  (req: Request, res: Response) => MealsController.getByCategoryQuery(req, res),
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
  (req: Request, res: Response) => MealsController.getCategories(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => MealsController.getMealById(req, res),
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