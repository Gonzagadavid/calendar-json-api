import monthNames from '../constants/names';
import { Calendar } from '../types';
import generateCalendarBoard from './generateCalendarBoard';
import toFirstUpperCase from './helper/toFirstUpperCase';

const monthCalendar: Calendar = (year, month) => {
  const board = generateCalendarBoard(year, month);
  const monthName = toFirstUpperCase(monthNames[month]);

  return { [monthName]: board, year };
};

export default monthCalendar;
