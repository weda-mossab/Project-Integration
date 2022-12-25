import express, { Express, Request, Response } from 'express';
const keycloak = require('../src/keycloakConfig.js').initKeycloak();


const app: Express = express();
const port = 3000;
app.use(keycloak.middleware());

app.get('/', keycloak.protect(), (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});