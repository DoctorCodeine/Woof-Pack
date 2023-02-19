import express, {
	Express,
	Request,
	Response,
	ErrorRequestHandler,
	RequestHandler,
	NextFunction,
} from 'express';

const app: Express = express();
const PORT: Number = 3333;
app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);

const pupRouter = express.Router();
app.use('/pup', pupRouter);

app.use('*', (req: Request, res: Response) => {
  return res.status(404).send('Page not found');
});

app.use((req: Request, res: Response, err: ErrorRequestHandler) => {
  const defaultError = { 
    log: 'Express Error Handler Trigged',
    status: 500,
    message:{err: `This is the error message:${err}`}
  }
  const errorObject = Object.assign({}, defaultError, err);
  console.log(defaultError);
  return res.status(errorObject.status).json(errorObject.message);
});

app.listen((PORT: Number) => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;