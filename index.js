const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/our",(req,res)=>{
    res.render("our")
})

app.get("/who",(req,res)=>{
    res.render("who")
})

app.get("/work",(req,res)=>{
    res.render("work")
})

app.listen(3000,()=>{
    console.log("Rodando na porta 3000");
})