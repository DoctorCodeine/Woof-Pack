import express, { Express, Request, Response, ErrorRequestHandler, RequestHandler, NextFunction } from 'express';

const puprouter = express.Router();
puprouter.use(express.json());

puprouter.get('/pack', (req: Request, res: Response) =>{
  
});