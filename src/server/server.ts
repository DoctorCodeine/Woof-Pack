import express, {
	Express,
	Request,
	Response,
	ErrorRequestHandler,
	RequestHandler,
	NextFunction,
} from 'express';

import pupRouter from './routers/router'; 
// import bodyParser from 'body-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
const app: Express = express();
const PORT: number = 8000;

app.use(express.json() as RequestHandler);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(cors());

app.use('/pup', pupRouter);

app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('Page not found');
});


app.use((req: Request, res: Response, err:any) => {
  const defaultError = { 
    log: 'Express Error Handler Trigged',
    status: 500,
    message:{err: `This is the error message:${err}`}
  }
  const errorObject = Object.assign({}, defaultError, err);
  console.log(defaultError);
  return res.status(errorObject.status).json(errorObject.message);
});

app.listen(PORT, () => {
  console.log(`**** EXPRESS listening on port ${PORT}`);
});
