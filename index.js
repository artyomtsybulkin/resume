const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the page
app.get("/", (req, res) => {
    res.render("index", { title: "Resume", message: "My resume!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});