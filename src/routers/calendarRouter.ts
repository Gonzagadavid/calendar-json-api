import { Router } from 'express';
import { getCalendarNow } from '../controllers';

const router = Router();

router.get('/', getCalendarNow);

export default router;
