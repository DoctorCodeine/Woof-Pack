import Pupper from '../database/pupModel';
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ResponseObject } from '../../../types';

interface dogController {
	getDogs: ResponseObject;
	postDog: ResponseObject;
	updateDog: ResponseObject;
	deleteDog: ResponseObject;
}
const dogController: dogController = {
	//working
	getDogs: (req, res, next) => {
		const { dogPack } = req.params;
		Pupper.find({ dogPack })
			.then((packData) => {
				res.locals.dogPack = packData;
				return next();
			})
			.catch((err) => {
				return next({
					log: 'There is an error occuring while getting all pack member in dogController.getDogs',
					status: 418,
					message: {err: `This is the error: ${err.message}`},
				});
			})
			.finally(() => {
				res.end();
			});
		},
	//working
	postDog: async (req, res, next) => {
		const { email, password } = req.body;
		try { 
			const newDog = await Pupper.create({email, password});
			res.locals.newDog = newDog;
			return next();
		}
		catch (err) {
			return (next({
				log: 'There is an error in creating this user',
				status: 418, 
				message: {err: `Error is occuring at dogController.postDog. ${err}`
			}}));
		};
	},

	updateDog: (req, res, next) => {
		const {email, password} = req.params;
		const {newEmail, newPassword} = req.body;
		Pupper.findOneAndUpdate(
			{email: email, password: password},
			{email: newEmail, password: newPassword},
			{new:true},
			(err, updatedDogDoc) => {
				if (err){
					return (next({
						log:'There was an error updating the user',
						status:418, 
						message: {err:`There was an error updating the user: ${err.message}`}
					}));
				}
					res.locals.updatedPup = updatedDogDoc;
					return next();
		});
	},

	// working
	deleteDog: (req, res, next) => {
		// console.log('this is dog to/ be deleted:', req.params);
    Pupper.findOneAndDelete({_id: req.params.id}, (err, deletedDogDoc) => {
      if (err) {
        return next({
          log: `The following error occured: ${err}`,
          status: 418,
          message: { err: 'An error occured while trying to delete a user'},
        });
      } else if (!deletedDogDoc) {
        return next({
          status: 400,
          message: { err: 'No user with the given email is in the database' },
        });
      }
      res.locals.deletedPup = deletedDogDoc;
			return next();
    });
  },
};

export default dogController;
