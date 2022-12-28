import express, { Express, Request, Response } from 'express';
import { request } from 'http';

import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Participation from "./event_participation";
import participation from './event_participation';


function getUserName(req:any):String|undefined{
return req.kauth.grant.access_token.content.preferred_username
}

const keycloak = require('../src/keycloakConfig.js').initKeycloak();
const app: Express = express();
const port = 3000;
app.use(express.json());
app.use(keycloak.middleware());

app.use(cors());
app.use(bodyParser.json());

const uri:string="mongodb://127.0.0.1:27017/Project";
mongoose.connect(uri,(err)=>{
    if(err){ console.log(err); }
    else{ console.log("Mongo db connection sucess");}
});


app.post('/', keycloak.protect() , async (req: any, res: Response) => {
 res.send(200)
});


app.get("/",keycloak.protect("user") ,async (req:any,res:Response)=>{
let  result = participation.aggregate([ 
{$set:{Notparticipated:{$not :"$participents."+getUserName(req)}}},
{$project: {_id:1, name:1, description:1,Notparticipated:1}}
])
res.send(await result)
  
});



  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });


