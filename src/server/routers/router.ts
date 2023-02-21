import express, {Request, Response} from 'express';
import dogController from '../controllers/dogController';
import authController from '../controllers/authController';

const puprouter = express.Router();
puprouter.use(express.json());


puprouter.get('/', dogController.getDogs, (req: Request, res: Response) =>{
  return res.status(200).json(res.locals.dogPack);
  
});
puprouter.post('/userPup', dogController.postDog,(req: Request, res: Response) =>{
  return res.status(200).json(res.locals.newDog);
});
puprouter.post('/signin', dogController.getDogs, authController.verifyUser, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.foundUser);
});

puprouter.patch('/updatePup/:email', dogController.updateDog,(req: Request, res: Response) =>{
  return res.status(200).json(res.locals.upatedPup);
});
puprouter.delete('/deletePup/:id', dogController.deleteDog, (req: Request, res: Response) =>{
  return res.status(200).json(res.locals.deletedPup);
});

export default puprouter;