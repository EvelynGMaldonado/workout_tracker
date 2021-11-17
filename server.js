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
app.use(routes);
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useUnifiedToology: true,
    useCreateIndex: true,
    useFindAndModify:false
});
// db.User.create({ name: "Ernest Hemingway" })
// .then(dbUser => {
// console.log(dbUser);
// })
// .catch(({ message }) => {
// console.log(message);
// });

// app.get("/notes", (req, res) => {
// db.Note.find({})
// .then(dbNote => {
//     res.json(dbNote);
// })
// .catch(err => {
//     res.json(err);
// });
// });

// app.get("/user", (req, res) => {
// db.User.find({})
// .then(dbUser => {
//     res.json(dbUser);
// })
// .catch(err => {
//     res.json(err);
// });
// });

// app.post("/submit", ({ body }, res) => {
// db.Note.create(body)
// .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
// .then(dbUser => {
//     res.json(dbUser);
// })
// .catch(err => {
//     res.json(err);
// });
// });

// app.get("/populateduser", (req, res) => {
// db.User.find({})
// .populate("notes")
// .then(dbUser => {
//     res.json(dbUser);
// })
// .catch(err => {
//     res.json(err);
// });
// });

//start the server
app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});
