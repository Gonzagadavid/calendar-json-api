import { CONFLICT } from '../constants/status';

export const INVALID_MONTH = {
  status: CONFLICT,
  message: 'month name invalid',
};

export const INVALID_YEAR = {
  status: CONFLICT,
  message: 'the year must have at least four digits',
};

export const INTERNAL_ERROR = 'Internal Error';
