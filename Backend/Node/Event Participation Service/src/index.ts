import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const keycloak = require('../src/keycloak-config.js').initKeycloak();
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(keycloak.middleware());

app.get('/',keycloak.protect(['user','admin']) , (req: Request, res: Response) => {
  keycloak.
  res.send('Refrech');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});