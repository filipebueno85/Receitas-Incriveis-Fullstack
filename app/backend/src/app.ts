import * as cors from 'cors';
import * as express from 'express';
import drinkRouter from './routes/drinks.routes';
import mealRouter from './routes/meals.routes';
import userRouter from './routes/users.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.use('/meals', mealRouter);
    this.app.use('/drinks', drinkRouter);
    this.app.use('/users', userRouter);
    
    // Não remover essa rota
    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();

// import * as express from 'express';
// import drinkRouter from './routes/drinks.routes';
// import mealRouter from './routes/meals.routes';
// import userRouter from './routes/users.routes';

// class App {
//   public app: express.Express;

//   constructor() {
//     this.app = express();

//     this.config();

//     this.app.use('/meals', mealRouter);
//     this.app.use('/drinks', drinkRouter);
//     this.app.use('/users', userRouter);
    
//     // Não remover essa rota
//     this.app.get('/', (req, res) => res.json({ ok: true }));
//   }

//   private config():void {
//     const accessControl: express.RequestHandler = (_req, res, next) => {
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//       res.header('Access-Control-Allow-Headers', '*');
//       next();
//     };

//     this.app.use(express.json());
//     this.app.use(accessControl);
//   }

//   public start(PORT: string | number): void {
//     this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
//   }
// }

// export { App };

// // Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
// export const { app } = new App();
