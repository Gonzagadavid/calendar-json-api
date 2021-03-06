import { defaultYear } from '../constants/defaultDate';
import { FOUR } from '../constants/numbers';
import { INVALID_YEAR } from '../errors';
import { Handler } from '../types';

const validationYear: Handler = (req, _res, next) => {
  const { query, params } = req;
  const year = query.year || params.year;
  const { date } = req;

  if (!year) {
    req.date = { ...date, year: defaultYear };
    return next();
  }

  if (Number.isNaN(+year) || year.length !== FOUR) return next(INVALID_YEAR);
  req.date = { ...date, year: +year };

  return next();
};

export default validationYear;
