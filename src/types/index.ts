import { NextFunction, Request, Response } from 'express';

export type Controller = (_req: Request, _res: Response, _next: NextFunction) => void;

export type Calendar = (_year: number, _mounth: number) => number[][];
