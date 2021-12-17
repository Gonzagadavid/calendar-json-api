import monthNames from '../constants/names';
import { ZERO } from '../constants/numbers';
import { INVALID_MONTH } from '../errors';
import { Handler } from '../types';

const validationMonth: Handler = (req, _res, next) => {
  const { monthName } = req.params;
  const monthPosition = monthNames.indexOf(monthName);

  if (monthPosition < ZERO) return next(INVALID_MONTH);

  req.date = { month: monthPosition };

  return next();
};

export default validationMonth;
