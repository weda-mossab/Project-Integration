import express = require("express");
import {Request,Response} from "express";

export default class Server{
    constructor(private port:number) {}
    public start():void{
        const app=express();
        app.get("/",(req:Request,res:Response)=>{
            res.send("<h1>Test Express avec Type Script </h1>");
});
        app.listen(this.port,()=>{
            console.log("server strated...");
        });
}
}


