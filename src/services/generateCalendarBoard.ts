import {
  ONE, SEVEN, THIRTHY, THIRTHY_ONE, ZERO,
} from '../constants/numbers';
import { Calendar } from '../types';
import generateBoard from './helper/generateBoard';
import isThirtyOne from './isThirtyOne';

const generateCalendarBoard: Calendar = (year, month) => {
  const lastDay = isThirtyOne(year, month) ? THIRTHY_ONE : THIRTHY;
  const board = generateBoard();
  const dayInit = new Date(year, month, ONE).getDay();

  let day = ZERO;

  const calendarBoard = board.map((week, weekCount) => week.map((empty, index) => {
    const position = weekCount * SEVEN + index;
    if (position < dayInit || day >= lastDay) return empty;
    day += ONE;
    return day;
  }));

  return calendarBoard;
};

export default generateCalendarBoard;
