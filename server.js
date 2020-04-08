/* --- Dependencies --- */
require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

/* --- Configuration --- */
const app = express();
const port = process.env.NODE_ENV || 3001;

/* --- Middleware --- */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./views/build")));

/* --- Routes --- */
app.use("/api/errors", require("./routes/errors"));
app.use("/api/posts", require("./routes/posts"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/build/index.html"));
});

/* --- Bootup --- */
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;