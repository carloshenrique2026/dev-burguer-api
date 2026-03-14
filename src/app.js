import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

//Himport fileRouteConfig from './config/fileRoutes.cjs';
import routes from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

app.use(express.json());

//H app.use(express.urlencoded({ extended:  true }));
//Happ.use('/product-file', fileRouteConfig);
app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));
app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')));

app.use(routes);

export default app;

/*
import express from 'express';
import { resolve } from 'node:path';
import cors from 'cors';

import routes from './routes.js';

import './database';

class App {
constructor() {
    this.app = express();

    this.app.use(cors());
    this.middlewares();
    this.routes();
 }
}






*/