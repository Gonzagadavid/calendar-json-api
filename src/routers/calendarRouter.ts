import { Router } from 'express';
import { getCalendarNow } from '../controllers';
import validationMonth from '../middlewares/validationMonth';
import validationYear from '../middlewares/validationYear';

const router = Router();

router.get('/', getCalendarNow);

router.get('/:monthName', validationMonth, validationYear);

export default router;
