import request from 'supertest';
import monthNames from '../../constants/names';
import toFirstUpperCase from '../../services/helper/toFirstUpperCase';

const date = new Date();
const month = toFirstUpperCase(monthNames[date.getMonth()]);
const year = date.getFullYear();

describe('Get /', () => {
  it('verifica o status 200', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.statusCode).toBe(200);
  });

  it('verifica a propridades da resposta', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.body).toHaveProperty('year', year);
    expect(response.body).toHaveProperty(month);
  });

  it('verifica se o primeiro dia corresponde ao dia da semana correto', async () => {
    const firstDay = new Date(year, date.getMonth(), 1).getDay();
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    expect(response.body[month][0][firstDay]).toBe(1);
  });

  it('verifica se possui 7 dias em cada array de semana', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/');
    response.body[month].forEach((week: number[]) => {
      expect(week).toHaveLength(7);
    });
  });
});
