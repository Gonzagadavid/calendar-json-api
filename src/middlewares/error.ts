import { ErrorRequestHandler } from 'express';
import { INTERNAL_SERVER_ERROR } from '../constants/status';
import { INTERNAL_ERROR } from '../errors';

const error: ErrorRequestHandler = (err, req, res, _next) => {
  const status = err.status || INTERNAL_SERVER_ERROR;
  const message = err.message || INTERNAL_ERROR;

  res.status(status).json({ message });
};
export default error;
