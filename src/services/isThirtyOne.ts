import { CheckDate } from '../types';

const isThirtyOne: CheckDate = (year, month) => {
  const date = new Date(year, month, 31);
  return date.getMonth() === month;
};

export default isThirtyOne;
