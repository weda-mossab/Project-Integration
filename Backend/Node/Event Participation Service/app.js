var express=require("express");
var app=express();

app.get("/",(req, res) => {
res.setHeader("content-type","text/html");
res.send("<h3>hello express </h3>");
});

app.get("/books/:code",(req, res) => {
    res.setHeader("content-type","application/json");
    let infos = {
        name: "mossab", email:"mossab@gmail.com", code:req.params.code
    };
        res.send(JSON.stringify(infos));
});

app.listen(7000,()=>{
    console.log("server strated");
});
