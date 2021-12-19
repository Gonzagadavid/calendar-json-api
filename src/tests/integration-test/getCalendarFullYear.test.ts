import request from 'supertest';
import monthNames from '../../constants/names';
import toFirstUpperCase from '../../services/helper/toFirstUpperCase';
import { fullyear } from '../constants';

const date = new Date();
const year = date.getFullYear();

describe('Get /fullyear/:year', () => {
  it('varifica se retorna o status 409 quando passado um ano com menos de 4 digitos', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/22');
    expect(response.statusCode).toBe(409);
  });

  it('varifica se retorna uma mensagem de erro quando passado um mês não existente', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/22');
    expect(response.body).toHaveProperty('message', 'the year must have at least four digits');
    expect(response.body.message).toBe('the year must have at least four digits');
  });

  it('verifica o status 200', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.statusCode).toBe(200);
  });

  it('verifica se o mês e o ano corresponde ao passado por parametro', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.body).toHaveProperty('year', 2022);
    monthNames.forEach((month) => {
      expect(response.body).toHaveProperty(toFirstUpperCase(month));
    });
  });

  it('verifica quando não passado o ano é utilizado o ano atual', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/');
    expect(response.body).toHaveProperty('year', year);
    monthNames.forEach((month) => {
      expect(response.body).toHaveProperty(toFirstUpperCase(month));
    });
  });

  it('verifica se o primeiro dia corresponde ao dia da semana correto', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    monthNames.forEach((month, position) => {
      const firstDay = new Date(2022, position, 1).getDay();
      expect(response.body[toFirstUpperCase(month)][0][firstDay]).toBe(1);
    });
  });
  it('verifica se possui 7 dias em cada array de semana', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    monthNames.forEach((month) => {
      response.body[toFirstUpperCase(month)].forEach((week: number[]) => {
        expect(week).toHaveLength(7);
      });
    });
  });

  it('verifica se possui 7 dias em cada array de semana', async () => {
    const req = await request('http://localhost:3500/fullyear');
    const response = await req.get('/2022');
    expect(response.body).toEqual(fullyear);
  });
});
