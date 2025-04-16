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
    const posts = [
        {
            title: "Ciambellone",
            content: "Ciambellone",
            image : "<img src=./images/ciambellone.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Cracker Barbabietola",
            content: "Cracker Barbabietola",
            image : "<img src=./images/cracker_barbabietola.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Pane Fritto Dolce",
            content: "Pane Fritto Dolce",
            image : "<img src=./images/pane_fritto_dolce.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Pasta Barbabietola",
            content: "Pasta Barbabietola",
            image : "<img src=./images/pasta_barbabietola.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Torta Paesana",
            content: "Torta Paesana",
            image : "<img src=./images/torta_paesana.jpeg>",
            tags: ["tag1", "tag2", "tag3"]
        }
    ];

    res.json(posts);
});


//server in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});