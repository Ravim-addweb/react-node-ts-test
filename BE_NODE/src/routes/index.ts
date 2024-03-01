import { Router } from 'express';
import FlickerController  from '../controllers/Flickr';
import { validateToken } from '../middlewares';
const router: Router = Router();

/** routes */
router.use(validateToken);
router.get('/list', FlickerController.fetchAllData);

export default router;