import {
  ONE, SEVEN, ZERO,
} from '../constants/numbers';
import { CalendarBoard } from '../types';
import generateBoard from './helper/generateBoard';
import getLastDay from './helper/getLastDay';
// import isThirtyOne from './isThirtyOne';

const generateCalendarBoard: CalendarBoard = (year, month) => {
  const lastDay = getLastDay(year, month);
  const board = generateBoard();
  const dayInit = new Date(year, month, ONE).getDay();

  let day = ZERO;

  const calendarBoard = board.map((week, weekCount) => week.map((empty, index) => {
    const position = weekCount * SEVEN + index;
    if (position < dayInit || day >= lastDay) return empty;
    day += ONE;
    return day;
  })).filter((week) => !week.every((day) => !day));

  return calendarBoard;
};

export default generateCalendarBoard;
