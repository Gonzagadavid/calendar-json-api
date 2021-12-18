import { OK } from '../constants/status';
import { fullYearCalendar } from '../services';
import { Dateyear, Handler } from '../types';

const getCalendarFullYear: Handler = (req, res, next) => {
  try {
    const { year } = req.date as Dateyear;
    const calendar = fullYearCalendar(year);

    res.status(OK).json(calendar);
  } catch (err) {
    next(err);
  }
};

export default getCalendarFullYear;
