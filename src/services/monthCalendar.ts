import monthNames from '../constants/names';
import { Calendar } from '../types';
import generateCalendarBoard from './generateCalendarBoard';

const monthCalendar: Calendar = (year, month) => {
  const board = generateCalendarBoard(year, month);
  const monthName = monthNames[month];

  return { [monthName]: board, year };
};

export default monthCalendar;
