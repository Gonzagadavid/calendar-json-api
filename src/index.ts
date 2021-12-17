import express from 'express';
import dotenv from 'dotenv';
import router from './routers/calendarRouter';
import error from './middlewares/error';

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use('/', router);

app.use(error);
app.listen(PORT, () => console.log(`started in port ${PORT}`));
