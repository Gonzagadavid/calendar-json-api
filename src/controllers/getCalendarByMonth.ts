import { monthCalendar } from '../services';
import { Handler } from '../types';
import { OK } from '../constants/status';
import { defaultMonth, defaultYear } from '../constants/defaultDate';

const getCalendarByMonth: Handler = (req, res, next) => {
  try {
    const { month, year } = { ...req.date };
    const yearReq = year || defaultYear;
    const monthReq = month || defaultMonth;
    const calendar = monthCalendar(yearReq, monthReq);

    res.status(OK).json(calendar);
  } catch (err) {
    next(err);
  }
};

export default getCalendarByMonth;
