import { Router } from 'express';
import { getCalendarByMonth, getCalendarNow } from '../controllers';
import validationMonth from '../middlewares/validationMonth';
import validationYear from '../middlewares/validationYear';

const router = Router();

router.get('/', getCalendarNow);

router.get('/:monthName', validationMonth, validationYear, getCalendarByMonth);

router.get('/fullyear/:year', validationYear);

export default router;
