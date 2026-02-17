import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

//Himport fileRouteConfig from './config/fileRoutes.cjs';
import routes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
//H app.use(express.urlencoded({ extended:  true }));
//Happ.use('/product-file', fileRouteConfig);
app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));

app.use(routes);

export default app;