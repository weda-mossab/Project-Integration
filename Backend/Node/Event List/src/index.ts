import express, {Request,Response} from "express";

import bodyParser from "body-parser";
import serverStatic from "serve-static";
import mongoose from "mongoose";
import cors from "cors";

const app=express();
app.use(bodyParser.json());
app.use(serverStatic("Public"));
app.use(cors());

const uri:string="mongodb://localhost:27017/project";
mongoose.connect(uri,(err)=>{
    if(err){ console.log(err); }
    else{ console.log("Mongo db connection sucess");}
});

app.listen(8708, ()=>{
    console.log("server started on port %d",8708);
});

module.exports=app;

