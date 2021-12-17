import express from 'express';
import dotenv from 'dotenv';
import router from './routers/calendarRouter';

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use('/', router);

app.listen(PORT, () => `started in port ${PORT}`);
