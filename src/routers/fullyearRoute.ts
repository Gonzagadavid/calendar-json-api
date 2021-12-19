import { Router } from 'express';
import { getCalendarFullYear } from '../controllers';
import { validationYear } from '../middlewares';

const router = Router();

router.get('/', validationYear, getCalendarFullYear);
router.get('/:year', validationYear, getCalendarFullYear);

export default router;
