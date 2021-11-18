const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3012;

const db = require("./models");
const { Router } = require("express");

const app = express();
const routes = require("./controller");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(require("./controller/apiRoutes"));
// app.use(require("./controller/pageRoutes"));

// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI|| "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
});

app.use(routes);

//start the server
app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});
