import { Router } from 'express';
import { getCalendarByMonth, getCalendarNow } from '../controllers';
import { validationMonth, validationYear } from '../middlewares';

const router = Router();

router.get('/', getCalendarNow);

router.get('/:monthName', validationMonth, validationYear, getCalendarByMonth);

export default router;
