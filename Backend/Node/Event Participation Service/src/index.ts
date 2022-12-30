import express, { Express, Request, Response } from 'express';
import { request } from 'http';

import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Participation from "./event_participation";
import participation from './event_participation';
import { User } from './User';


function getUserName(req:any):String|undefined{
return req.kauth.grant.access_token.content.preferred_username
}


function getUserProfile(req:any):User|undefined{
  let u : User = new User();
  req.kauth.grant.access_token.content
  u.email= req.kauth.grant.access_token.content.email;
  u.name= req.kauth.grant.access_token.content.name;
  u.preferred_username= req.kauth.grant.access_token.content.preferred_username;

  return u;
  }
  

const keycloak = require('../src/keycloakConfig.js').initKeycloak();
const app: Express = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.options("/", (req:Request,res:Response)=>{
  res.send("ok")
  });
app.use(keycloak.middleware());



const uri:string="mongodb://127.0.0.1:27017/Project";
mongoose.connect(uri,(err)=>{
    if(err){ console.log(err); }
    else{ console.log("Mongo db connection sucess");}
});





app.get("/",keycloak.protect("user") ,async (req:any,res:Response)=>{
let  result = participation.aggregate([ 
{$set:{Notparticipated:{$not :"$participents."+getUserName(req)}}},
{$project: {_id:1, name:1,avatar:1 ,date:1 , description:1,Notparticipated:1}}
])
res.send(await result)
});




app.get("/:id",keycloak.protect("user") ,async (req:any,res:Response)=>{
  let  result = participation.aggregate([ 
  {$match:{_id:req.params.id}},
  {$set:{Notparticipated:{$not :"$participents."+getUserName(req)}}},
  {$project: {_id:1, name:1,avatar:1 ,date:1 , description:1,Notparticipated:1}}
  ])
  let r = await result
  res.send(r[0])
  });
  

app.post("/:id", keycloak.protect("user"),async (req:any,res:Response)=>{
 let p =await participation.findById(req.params.id)
  if(p?.participents.get(getUserName(req)) == undefined){
    p?.participents.set(getUserName(req),getUserProfile(req))
  await  participation.create(p)
  } else{
    p?.participents.delete(getUserName(req))
  await    participation.create(p)
  }
  res.send(p)
})


 


  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });


