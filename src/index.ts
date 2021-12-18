import express from 'express';
import dotenv from 'dotenv';
import router from './routers/calendarRouter';
import { error } from './middlewares';

dotenv.config();

const { PORT } = process.env;
const started = `started in port ${PORT}`;

const app = express();

app.use('/', router);

app.use(error);
app.listen(PORT, () => console.log(started));
