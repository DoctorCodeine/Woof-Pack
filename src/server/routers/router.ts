import express, {Request, Response} from 'express';
import dogController from '../controllers/dogController';
import authController from '../controllers/authController';

const pupRouter = express.Router();
pupRouter.use(express.json());

//http://localhost:8000/pup/
pupRouter.get('/',dogController.getDogs, (req: Request, res: Response) =>{
  // console.log('Frontend speaking to backend');
  return res.status(200).json(res.locals.dogPack);
});

//http://localhost:8000/pup/login
pupRouter.post('/login', authController.verifyUser, (req: Request, res:Response) =>{
  return res.status(200).json(res.locals.foundUser);
});

//http://localhost:8000/pup/signup
pupRouter.post('/signup', dogController.postDog,(req: Request, res: Response) =>{
  return res.status(200).json(res.locals.newDog);
});

pupRouter.patch('/updatePup/:email', dogController.updateDog,(req: Request, res: Response) =>{
  return res.status(200).json(res.locals.upatedPup);
});
pupRouter.delete('/deletePup/:id', dogController.deleteDog, (req: Request, res: Response) =>{
  return res.status(200).json(res.locals.deletedPup);
});

export default pupRouter;