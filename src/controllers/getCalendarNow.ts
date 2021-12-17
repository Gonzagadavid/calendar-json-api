import { monthNowCalendar } from '../services';
import { Handler } from '../types';
import { OK } from '../constants/status';

const getCalendarNow: Handler = (_req, res, next) => {
  try {
    const calendar = monthNowCalendar();

    res.status(OK).json(calendar);
  } catch (err) {
    next(err);
  }
};

export default getCalendarNow;
