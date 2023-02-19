import express, { Express, Request, Response, ErrorRequestHandler, RequestHandler, NextFunction } from 'express';

const puprouter = express.Router();
puprouter.use(express.json());

puprouter.get('/pack', (req: Request, res: Response) =>{
  return res.status(200).json('this is the get method');
  
});
puprouter.post('/pack', (req: Request, res: Response) =>{
  return res.status(200).json(res.locals.newDog);
});
puprouter.patch('/pack', (req: Request, res: Response) =>{
  
});
puprouter.delete('/pack', (req: Request, res: Response) =>{
  
});