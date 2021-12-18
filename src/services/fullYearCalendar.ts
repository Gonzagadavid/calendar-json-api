import { monthCalendar } from '.';
import monthNames from '../constants/names';
import { CalendarYear, CalendarResp } from '../types';

const fullYearCalendar: CalendarYear = (year) => {
  const calendarYear = monthNames.reduce<CalendarResp>((calendar, _monthName, position) => {
    const calendarMonth = monthCalendar(year, position);
    return { ...calendar, ...calendarMonth };
  }, { year });

  return calendarYear;
};

export default fullYearCalendar;
