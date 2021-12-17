import { THIRTHY_ONE } from '../constants/numbers';
import { CheckDate } from '../types';

const isThirtyOne: CheckDate = (year, month) => {
  const date = new Date(year, month, THIRTHY_ONE);
  return date.getMonth() === month;
};

export default isThirtyOne;
