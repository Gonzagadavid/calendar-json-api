import request from 'supertest';
import monthNames from '../../constants/names';
import toFirstUpperCase from '../../services/helper/toFirstUpperCase';

const date = new Date();
const month = toFirstUpperCase(monthNames[date.getMonth()]);
const year = date.getFullYear();

describe('Get /month', () => {
  it('check status 200', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.statusCode).toBe(200);
  });

  it('check answer properties', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.body).toHaveProperty('year', year);
    expect(response.body).toHaveProperty(month);
  });

  it('check the first day matches the correct day of the week', async () => {
    const firstDay = new Date(year, date.getMonth(), 1).getDay();
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.body[month][0][firstDay]).toBe(1);
  });

  it('check the amount of 7 days in each week array', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    response.body[month].forEach((week: number[]) => {
      expect(week).toHaveLength(7);
    });
  });
});
