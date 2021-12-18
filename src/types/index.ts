import { NextFunction, Request, Response } from 'express';

type CalendarResp = {
  January?: string,
  February?: string,
  March?: string,
  April?: string,
  May?: string,
  June?: string,
  July?: string,
  August?: string,
  September?: string,
  October?: string,
  November?: string,
  December?: string,
  year: number,
}

declare module 'express' {
  interface Request {
      date?: {
        year?: number,
        month?:number,
      };
  }
}

export type Handler = (_req: Request, _res: Response, _next: NextFunction) => void;

export type CalendarBoard = (_year: number, _mounth: number) => number[][];

export type CalendarNow = () => CalendarResp;

export type Calendar = (_year: number, _mounth: number) => CalendarResp;

export type CalendarService = (_year: number, _mounth: number) => CalendarResp;

export type CheckDate = (_year: number, _mounth: number) => boolean;

export type Board = () => number[][];

export type DateCompleted = { month: number, year: number}
