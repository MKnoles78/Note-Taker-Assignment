const express = require("express");
const path = require("path");


const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// gets the root folder 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

// gets the notes folder 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;
    })
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server is listening on " + PORT))