import {ResponseObject} from '../../../types';
import Pupper from '../database/pupModel';

interface userAuth {
  verifyUser: ResponseObject;
};

const authController: userAuth = {
  verifyUser:(req, res, next) => {
    const {email} = req.body;
    console.log('this is user:', req.body);
      Pupper.findOne({ email })
      .then((data) => {
        if (data !== null) {
          res.locals.foundUser = data; 
          return next();
        }
      })
      .catch((err)=> {
        return next({
         log: 'User cannot be found',
         status: 418, 
         message: {err: `There is an error occuring in authController.verifyUser. ${err.message}`} 
        })
      });
  }
}

export default authController;

