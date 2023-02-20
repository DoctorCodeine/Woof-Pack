import Pupper from '../database/pupModel';
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ResponseObject } from '../../../types';

interface dogController {
	getDogs: ResponseObject;
	postDog: ResponseObject;
	updateDog: ResponseObject;
	deleteDogs: ResponseObject;
}
const dogController = {
	getDogs: (req: Request, res: Response, next: NextFunction) => {
		const { dogPack } = req.params;
		Pupper.find({ dogPack })
			.then((packData) => {
				res.locals.dogPack = packData;
				return next();
			})
			.catch((err) => {
				return next({
					log: 'There is an error occuring while getting all pack member in dogController.getDogs',
					status: 500,
					message: `This is the error: ${err.message}`,
				});
			});
	},

	postDog: (req: Request, res: Response, next: NextFunction) => {
		const { email, password } = req.body;
		console.log('this is req.body', req.body);

		Pupper.create({ email: email, password: password })
			.then((dog) => {
				res.locals.newDog = dog;
				return next();
			})
			.catch((err) => {
				return next({
					log: 'There is an error creating the user in dogController.postDog',
					status: 500,
					message: `There is the error: ${err.message}`,
				});
			});
	},

	updateDog: () => {},

	deleteDogs: () => {},
};

export default dogController;
