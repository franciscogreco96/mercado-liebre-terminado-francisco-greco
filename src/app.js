const express = require("express");

const app = express();

const path = require("path");

const port = process.env.port || 3030;

app.listen(3030, () => console.log("servidor corriendo en el puerto http://localhost:" + port));

app.use(express.static(path.resolve(__dirname, "../public")))

app.get("/", function(req,res){

    res.sendFile(path.join(__dirname, "./views/home.html"))
})
app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"))});

app.get("/login", (req, res)=>{
        res.sendFile(path.join(__dirname, "./views/login.html"))});  
          
app.post("/", (req, res)=>{
        res.sendFile(path.join(__dirname, "./views/home.html"))});    

