//importo express
const express = require("express");

//assegno express alla variabile app
const app = express();

//definisco la porta
const port = 3000;

//creo la rotta "/" home
app.get("/", (req,res) =>{
    res.send("Server del mio Blog");
});

app.get("/bacheca", (req,res) =>{
    const posts = [
        {
            title: "Post 1",
            content: "Contenuto del post 1",
            image : "imgs/post1.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Post 2",
            content: "Contenuto del post 2",
            image : "imgs/post2.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Post 3",
            content: "Contenuto del post 3",
            image : "imgs/post3.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Post 4",
            content: "Contenuto del post 4",
            image : "imgs/post4.jpg",
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            title: "Post 5",
            content: "Contenuto del post 5",
            image : "imgs/post5.jpg",
            tags: ["tag1", "tag2", "tag3"]
        }
    ];

    res.json(posts);
});


//server in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});