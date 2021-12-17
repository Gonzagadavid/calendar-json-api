import { defaultYear } from '../constants/defaultDate';
import { INVALID_YEAR } from '../errors';
import { Handler } from '../types';

const validationYear: Handler = (req, _res, next) => {
  const { year } = req.query;
  const { date } = req;

  if (!year) {
    req.date = { ...date, year: defaultYear };
    return next();
  }

  if (Number.isNaN(+year) || year.length !== 4) return next(INVALID_YEAR);

  req.date = { ...date, year: +year };

  return next();
};

export default validationYear;
