const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRoute = require("./Router/auth");
const linksRoute = require("./Router/links");
const path = require("path");
const cors = require('cors');

const mail = require('./mail');
const cron = require('node-cron');

app.use(cors())


dotenv.config({ path: "../config.env" });

const Port = process.env.PORT || 5000;
const DB = process.env.MONGO_URL;

app.use(express.json());
mongoose
    .connect(DB)
    .then(() => console.log("connection successfull"))
    .catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/links", linksRoute);

app.use(express.static(path.join(__dirname, "/client/build")));

// mail();
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

app.listen(Port, () => {
    console.log(`Server is listening at port ${Port}`);

});

// cron.schedule("0 9 4 4 *", () => {
//     mail();
// });

// mail();