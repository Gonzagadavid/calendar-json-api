import { Router } from 'express';
import { getCalendarByMonth, getCalendarFullYear, getCalendarNow } from '../controllers';
import { validationMonth, validationYear } from '../middlewares';

const router = Router();

router.get('/', getCalendarNow);

router.get('/:monthName', validationMonth, validationYear, getCalendarByMonth);

router.get('/fullyear/:year', validationYear, getCalendarFullYear);

export default router;
