import {Router} from 'express'
const router = Router()

import  * as subsCtrl from '../controllers/subs.controller';

router.post('/subscribe', subsCtrl.subscription);
router.get('/loadSubs', subsCtrl.loadSubs);

export default router;