import { config } from 'dotenv';
import app from './app';

config();

const { PORT } = process.env;
const started = `started in port ${PORT}`;

app.listen(PORT, () => console.log(started));
