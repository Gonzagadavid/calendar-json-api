import request from 'supertest';
import { boardResp } from '../constants';
import app from '../../app';

const date = new Date();
const year = date.getFullYear();

describe('Get /month/:monthName', () => {
  it('checks the returns the 409 status when a non-existing month is entered', async () => {
    const req = request(app);
    const response = await req.get('/month/fevereiro');
    expect(response.statusCode).toBe(409);
  });

  it('checks the returns an error message when entered as a non-existent month parameter', async () => {
    const req = request(app);
    const response = await req.get('/month/fevereiro');
    expect(response.body).toHaveProperty('message', 'month name invalid');
    expect(response.body.message).toBe('month name invalid');
  });

  it('check the 200 status when valid month is entered as parameter', async () => {
    const req = request(app);
    const response = await req.get('/month/february');
    expect(response.statusCode).toBe(200);
  });

  it('check the month and year correspond to the one entered as parameter', async () => {
    const req = request(app);
    const response = await req.get('/month/february?year=2022');
    expect(response.body).toHaveProperty('year', 2022);
    expect(response.body).toHaveProperty('February');
  });

  it('checks when not entered year is used in current year', async () => {
    const req = request(app);
    const response = await req.get('/month/july');
    expect(response.body).toHaveProperty('year', year);
    expect(response.body).toHaveProperty('July');
  });

  it('check the first day matches the correct day of the week', async () => {
    const firstDay = new Date(2022, 0, 1).getDay();
    const req = request(app);
    const response = await req.get('/month/january?year=2022');
    expect(response.body.January[0][firstDay]).toBe(1);
  });

  it('check the amount of 7 days in each week array', async () => {
    const req = request(app);
    const response = await req.get('/month/january?year=2022');
    response.body.January.forEach((week: number[]) => {
      expect(week).toHaveLength(7);
    });
  });

  it('checks the returned calendar agrees with the one entered by parameter', async () => {
    const req = request(app);
    const response = await req.get('/month/january?year=2022');
    expect(response.body).toEqual(boardResp);
  });
});
