import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserConroller';
import Validate from '../middlewares/Validate';

const userController = new UserController();

const userRouter = Router();

// userRouter.get(
//   '/login/role',
//   Validate.validateToken,
//  (req: Request, res: Response) => UserController.loginRoleF(req, res)
// );

userRouter.post(
  '/login',
  Validate.validateLogin,
  Validate.validateLoginBody,
  (req: Request, res: Response) => userController.login(req, res)
);

userRouter.post(
  '/register',
  // Validate.valid,
  (req: Request, res: Response) => userController.registerUser(req, res)
);

userRouter.get('/', (req: Request, res: Response) => userController.getAllUsers(req, res));

userRouter.get('/:id', (req: Request, res: Response) => userController.getUserById(req, res));

export default userRouter;

// import { Request, Response, Router } from 'express';
// import UserController from '../controllers/UserConroller';
// import Validate from '../middlewares/Validate';

// const userController = new UserController();

// const userRouter = Router();

// userRouter.get(
//   '/login/role',
//   Validate.validateToken,
//   (req: Request, res: Response) => UserController.loginRoleF(req, res),
// );

// userRouter.post(
//   '/login',
//   Validate.validateLogin,
//   Validate.validateLoginBody,
//   (req: Request, res: Response) => userController.login(req, res),
// );

// userRouter.post(
//   '/users',
//   Validate.validateToken,
//   (req: Request, res: Response) => userController.createUser(req, res),
// );

// userRouter.get('/users', (req: Request, res: Response) => userController.getAllUsers(req, res));

// userRouter.get('/users/:id', (req: Request, res: Response) => userController.getUserById(req, res));

// export default userRouter;
