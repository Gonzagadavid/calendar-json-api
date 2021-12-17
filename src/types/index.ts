import { NextFunction, Request, Response } from 'express';

export type Controller = (_req: Request, _res: Response, _next: NextFunction) => void;

export type Calendar = (_year: number, _mounth: number) => number[][];

export type CheckDate = (_year: number, _mounth: number) => boolean;

export type Board = () => number[][];
