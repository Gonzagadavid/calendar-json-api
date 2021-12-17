import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Error';

  res.status(status).json({ message });
};
export default error;
