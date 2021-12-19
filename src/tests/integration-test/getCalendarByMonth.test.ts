import request from 'supertest';
import { boardResp } from '../constants';

const date = new Date();
const year = date.getFullYear();

describe('Get /:month', () => {
  it('varifica se retorna o status 409 quando passado um mês não existente', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/fevereiro');
    expect(response.statusCode).toBe(409);
  });

  it('varifica se retorna uma mensagem de erro quando passado um mês não existente', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/fevereiro');
    expect(response.body).toHaveProperty('message', 'month name invalid');
    expect(response.body.message).toBe('month name invalid');
  });

  it('verifica o status 200 quando é passado um mes valido', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/february');
    expect(response.statusCode).toBe(200);
  });

  it('verifica se o mês e o ano corresponde ao passado por parametro', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/february?year=2022');
    expect(response.body).toHaveProperty('year', 2022);
    expect(response.body).toHaveProperty('february');
  });

  it('verifica quando não passado o ano é utilizado o ano atual', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/july');
    expect(response.body).toHaveProperty('year', year);
    expect(response.body).toHaveProperty('july');
  });

  it('verifica se o primeiro dia corresponde ao dia da semana correto', async () => {
    const firstDay = new Date(2022, 0, 1).getDay();
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/january?year=2022');
    expect(response.body.january[0][firstDay]).toBe(1);
  });

  it('verifica se possui 7 dias em cada array de semana', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/january?year=2022');
    response.body.january.forEach((week: number[]) => {
      expect(week).toHaveLength(7);
    });
  });

  it('verifica se possui 7 dias em cada array de semana', async () => {
    const req = await request('http://localhost:3500/month');
    const response = await req.get('/january?year=2022');
    expect(response.body).toEqual(boardResp);
  });
});
