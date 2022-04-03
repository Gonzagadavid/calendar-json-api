import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { error } from '../middlewares';
import routerRoot from '../routers/root';
import swaggerDocs from '../documents/swagger.json';

const app = express();

app.use(cors());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', routerRoot);

app.use(error);

export default app;
