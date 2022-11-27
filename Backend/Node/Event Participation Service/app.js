// var express=require("express");
// var app=express();

// app.get("/",(req, res) => {
// res.setHeader("content-type","text/html");
// res.send("<h3>hello express </h3>");
// });

// app.get("/books/:code",(req, res) => {
//     res.setHeader("content-type","application/json");
//     let infos = {
//         name: "mossab", email:"mossab@gmail.com", code:req.params.code
//     };
//         res.send(JSON.stringify(infos));
// });

// app.listen(7000,()=>{
//     console.log("server strated");
// });
const express = require('express')
const discovery = require('eo-discovery')

// Create a express app
const app = express()
// Start up the express application ...
var listener = app.listen(3000, () => {
  // ... and register with the eureka discovery
  // Hint: If your eureka registry is not on localhost, you must provide a EUREKA_HOST environment variable.
  discovery.init({
      name : 'ParticipationService',           // We need a name for the service, so others can use it.
      express : app,                    // The express app is used to provide the discovery endpoints
      port : listener.address().port    // This is the public port for the registry, we just pass the express listener port
  })
})
