//importo express
const express = require("express");

//assegno express alla variabile app
const app = express();

//definisco la porta
const port = 3000;

//configuro gli asset statici
app.use(express.static("public"));

//creo la rotta "/" home
app.get("/", (req,res) =>{
    res.send("Server del mio Blog");
});

app.get("/bacheca", (req,res) =>{
    res.json(posts);
});


//server in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});

//richiamo l'array dalla pagina postBlog.js
const posts = require("./postBlog.js");
