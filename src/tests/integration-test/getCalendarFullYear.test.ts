import request from 'supertest';
import monthNames from '../../constants/names';
import toFirstUpperCase from '../../services/helper/toFirstUpperCase';
import { fullyear } from '../constants';

const date = new Date();
const year = date.getFullYear();

describe('Get /fullyear/:year', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('checks the returns the 409 status when a year entered as a parameter has less than 4 digits', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/22');
    expect(response.statusCode).toBe(409);
  });

  it('checks whether returns an error message when a non-existent month is entered as a parameter', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/22');
    expect(response.body).toHaveProperty('message', 'the year must have at least four digits');
    expect(response.body.message).toBe('the year must have at least four digits');
  });

  it('check status 200', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.statusCode).toBe(200);
  });

  it('check that the month and year correspond to the one entered by parameter', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.body).toHaveProperty('year', 2022);
    monthNames.forEach((month) => {
      expect(response.body).toHaveProperty(toFirstUpperCase(month));
    });
  });

  it('check when not past year is used current year', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/');
    expect(response.body).toHaveProperty('year', year);
    monthNames.forEach((month) => {
      expect(response.body).toHaveProperty(toFirstUpperCase(month));
    });
  });

  it('check the first day matches the correct day of the week', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    monthNames.forEach((month, position) => {
      const firstDay = new Date(2022, position, 1).getDay();
      expect(response.body[toFirstUpperCase(month)][0][firstDay]).toBe(1);
    });
  });
  it('check the amount of 7 days in each week array', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    monthNames.forEach((month) => {
      response.body[toFirstUpperCase(month)].forEach((week: number[]) => {
        expect(week).toHaveLength(7);
      });
    });
  });

  it('checkth returns the calendar corresponding to the year entered by parameter', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.body).toEqual(fullyear);
  });
});
