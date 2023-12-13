
const express = require('express');
const path = require('path');
const app = express(); // Use express() instead of new express()
const portNr = 8080;

app.listen(portNr, () => {
    console.log("Server lyssnar nu på port nr 8080");
})
        // Det första du ser när du kopplar dig till 8080/ 
        // i send() så skall vi inkludera en fin frontend-meny.
        // så som det är i /login.. 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/products", (req, res) => {
    console.log("Accessing /products route");
    res.sendFile(path.join(__dirname, 'products.html'));
});

app.get("/login", (req, res) => {
    console.log("Accessing /login route");
    res.sendFile(path.join(__dirname, 'login.html'));
});


app.get("/register", (req, res) => {
    console.log("Accessing /register route");
    res.sendFile(path.join(__dirname, 'register.html'));
});

// nodemon .\server.js = execute kod och göra ändringar samtidigt som programmet körs.

