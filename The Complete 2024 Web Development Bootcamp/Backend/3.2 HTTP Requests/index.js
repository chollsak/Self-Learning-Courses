import express from "express";

const app = express();
const port = 3000;

//code that allows our server to handle GET requests
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
})

app.get("/contact",(req,res) => {
    res.send("<h1>Contact</h1>");
})

app.get("/about",(req,res) => {
    res.send("<h1>about</h1>");
})

//------------------------------------------------

app.listen(port, () => {
    console.log(`Server started and running on port ${port}.`);
})