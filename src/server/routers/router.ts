import express, { Express, Request, Response, ErrorRequestHandler, RequestHandler, NextFunction } from 'express';
import dogController from '../controllers/dogController';
const puprouter = express.Router();
puprouter.use(express.json());

puprouter.get('/', dogController.getDogs, (req: Request, res: Response) =>{
  return res.status(200).json(res.locals.dogPack);
  
});
puprouter.post('/userPup', dogController.postDog,(req: Request, res: Response) =>{
  return res.status(200).json(res.locals.newDog);
});
puprouter.patch('/updatePup', (req: Request, res: Response) =>{
  
});
puprouter.delete('/deletePup', (req: Request, res: Response) =>{
  
});

export default puprouter;