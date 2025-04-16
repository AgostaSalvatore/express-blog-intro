//importo express
const express = require("express");

//assegno express alla variabile app
const app = express();

//definisco la porta
const port = 3000;

//creo la rotta /
app.get("/", (req,res) =>{
    res.send("Server del mio Blog");
});




//server in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});