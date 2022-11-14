const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get("/our",(req,res)=>{
    res.sendFile(__dirname+"/views/our.html")
})

app.get("/who",(req,res)=>{
    res.sendFile(__dirname+"/views/who.html")
})

app.get("/work",(req,res)=>{
    res.sendFile(__dirname+"/views/work.html")
})

app.listen(3000,()=>{
    console.log("Rodando na porta 3000");
})