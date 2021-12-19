import { Router } from 'express';
import caledarRoute from './calendarRouter';
import fullyearRoute from './fullyearRoute';

const routerRoot = Router();

routerRoot.use('/month', caledarRoute);
routerRoot.use('/fullyear', fullyearRoute);

export default routerRoot;
