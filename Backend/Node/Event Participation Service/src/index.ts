import express, { Express, Request, Response } from 'express';
import { request } from 'http';

import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Participation from "./event_participation";
import participation from './event_participation';




const keycloak = require('../src/keycloakConfig.js').initKeycloak();
const app: Express = express();
const port = 3000;
//read json
app.use(express.json());
app.use(keycloak.middleware());

app.use(cors());
app.use(bodyParser.json());
/* new  */
const uri:string="mongodb://localhost:27017/Project";
mongoose.connect(uri,(err)=>{
    if(err){ console.log(err); }
    else{ console.log("Mongo db connection sucess");}
});


app.get('/', keycloak.protect(), (req: any, res: Response) => {
/* new  */

  Participation.find((err,participations)=>{
    if (err){res.status(500).send(err);}
    else{ res.send(participations);}
})


  // res.send(req.body);
  // console.log("*******************");
  // console.log(req.body._id);
  // console.log("*******************");
  console.log(req.kauth.grant.access_token.content.preferred_username);
  // console.log("*******************");
  // res.send(200);
});

/* new  */

app.post("/participation",(req:Request,res:Response)=>{
  let participation=new Participation(req.body._id,req.kauth.grant.access_token.content.preferred_username);

  participation.save(err=>{
      if (err){res.status(500).send(err);}
      else res.send(participation);
  })
});

/* new  */

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});