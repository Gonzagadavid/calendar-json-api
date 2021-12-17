import { generateMonthCalendar } from '../services';
import { Controller } from '../types';
import { OK } from '../constants/status';
import monthNames from '../constants/names';
import { defaultMonth, defaultYear } from '../services/helper/defaultDate';

const getCalendarNow: Controller = (_req, res, next) => {
  try {
    const monthName = monthNames[defaultMonth];
    const year = defaultYear;
    const calendar = generateMonthCalendar(defaultYear, defaultMonth);

    res.status(OK).json({ [monthName]: calendar, year });
  } catch (err) {
    next(err);
  }
};

export default getCalendarNow;
