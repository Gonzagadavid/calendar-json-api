import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { error } from './middlewares';
import routerRoot from './routers/root';

dotenv.config();

const { PORT } = process.env;
const started = `started in port ${PORT}`;

const app = express();

app.use(cors());

app.use('/', routerRoot);

app.use(error);
app.listen(PORT, () => console.log(started));
