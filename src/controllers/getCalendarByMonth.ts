import { monthCalendar } from '../services';
import { DateCompleted, Handler } from '../types';
import { OK } from '../constants/status';

const getCalendarByMonth: Handler = (req, res, next) => {
  try {
    const { month, year } = req.date as DateCompleted;
    const calendar = monthCalendar(year, month);

    res.status(OK).json(calendar);
  } catch (err) {
    next(err);
  }
};

export default getCalendarByMonth;
