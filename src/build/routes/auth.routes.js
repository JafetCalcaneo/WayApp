import {Router} from 'express'
const router = Router()

import  * as authCtrl from '../controllers/auth.controller';
import {verifySignup, authJwt} from '../middlewares';

router.post('/signup', [verifySignup.checkExistingUser], authCtrl.signUp);

router.post('/signin', authCtrl.signin);
router.post('/signintoken', authJwt.verifyToken, [authJwt.isAdmin, authJwt.isModerator]);

export default router;