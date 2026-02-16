import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true  }));
app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));


app.use(routes);

export default app;
