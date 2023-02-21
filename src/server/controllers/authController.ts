import {ResponseObject} from '../../../types';
import Pupper from '../database/pupModel';

interface userAuth {
  verifyUser: ResponseObject;
};

const authController: userAuth = {

  verifyUser:(req, res, next) => {
    const {email, password} = req.body;
    console.log('this is user:', req.body);
    
    if (email && password) {
      Pupper.findOne({ email: email, password: password}, (err, existingUser) => { 
        if (err) {
          return next({
            log: 'There was an error finding the user in the database',
            status: 418,
            message: {err: `There is an error occuring in authController.verifyUser. This is the error ${err.message}`}
          });
        }
        else if (!email || !password){
          return (next({
            log: 'Incorrect password or email provided',
            status: 422,
            message: {err: `There is an error occuring in authController.verifyUser. This is the error ${err.message}`}
          }));
        }
        res.locals.foundUser = existingUser;
        return next();
      });
    }
  },

};

export default authController;

