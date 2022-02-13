let nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const User = require("./Models/User");
const Link = require("./Models/Link");


dotenv.config({ path: "../config.env" });

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secure: false, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: "birthdaytrackermail@gmail.com",
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// let name = Link.findOne({ name: req.params.birthday.map() });
// let date = Link.findOne({ name: req.params.birthday.map() });

let mailOptions = {
    from: "birthdaytrackermail@gmail.com",
    to: "sdash29102@gmail.com", // email address to be fetched here
    subject: "Happy Birthday🎈",
    text: `Say happy birthday to anonymous` // name to be fetched here
};

function sendthemail() {
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent " + info.response);
        }
    });
}

module.exports = sendthemail;