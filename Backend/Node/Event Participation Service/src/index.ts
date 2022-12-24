import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');
const keycloak = require('../src/keycloak-config.js').initKeycloak();
dotenv.config();


const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(require('morgan')('dev'))
app.use(keycloak.middleware());

app.get('/',keycloak.protect() , (req: Request, res: Response) => {

  res.send(req);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});