import monthNames from '../constants/names';
import { CalendarNow } from '../types';
import generateCalendarBoard from './generateCalendarBoard';
import { defaultMonth, defaultYear } from '../constants/defaultDate';
import toFirstUpperCase from './helper/toFirstUpperCase';

const monthNowCalendar: CalendarNow = () => {
  const board = generateCalendarBoard(defaultYear, defaultMonth);
  const monthName = toFirstUpperCase(monthNames[defaultMonth]);

  return { [monthName]: board, year: defaultYear };
};

export default monthNowCalendar;
