import { Calendar } from '../types';
import generateBoard from './helper/generateBoard';
import isThirtyOne from './isThirtyOne';

const generateCalendarBoard: Calendar = (year, month) => {
  const lastDay = isThirtyOne(year, month) ? 31 : 30;
  const board = generateBoard();
  const dayInit = new Date(year, month, 1).getDay();
  console.log(dayInit);
  let day = 0;

  const calendarBoard = board.map((week, weekCount) => week.map((empty, index) => {
    const position = weekCount * 7 + index;
    if (position < dayInit || day >= lastDay) return empty;
    day += 1;
    return day;
  }));

  return calendarBoard;
};

export default generateCalendarBoard;
