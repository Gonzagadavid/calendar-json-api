import { THIRTHY_ONE } from '../../constants/numbers';
import { LastDay } from '../../types';

const getLastDay: LastDay = (year, month) => {
  let day = THIRTHY_ONE;
  let date = new Date(year, month, day);

  while (date.getMonth() !== month) {
    day -= 1;
    date = new Date(year, month, day);
  }

  return day;
};

export default getLastDay;
