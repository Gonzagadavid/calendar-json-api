import { generateMonthCalendar } from '../services';
import { Controller } from '../types';

const getCalendarNow: Controller = async (_req, res, next) => {
  try {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    const calendar = await generateMonthCalendar(year, month);

    res.status(200).json(calendar);
  } catch (err) {
    next(err);
  }
};

export default getCalendarNow;
