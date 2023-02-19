import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export type ResponseObject = (req: Request, res: Response, next: NextFunction) => void;