import express from 'express';
import cors from 'cors';
import { error } from '../middlewares';
import routerRoot from '../routers/root';

const app = express();

app.use(cors());

app.use('/', routerRoot);

app.use(error);

export default app;
