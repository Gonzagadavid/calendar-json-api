import { Calendar } from '../types';
import generateCalendarBoard from './generateCalendarBoard';

const generateMonthCalendar: Calendar = (year, month) => {
  const board = generateCalendarBoard(year, month);

  return board;
};

export default generateMonthCalendar;
