let nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const User = require("./Models/User");
const Link = require("./Models/Link");


dotenv.config({ path: "../config.env" });

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "birthdaytrackermail@gmail.com",
        password: process.env.GMAIL_PASSWORD
    }
});

let name = Link.findOne({ name: req.params.birthday.map() });
let date = Link.findOne({ name: req.params.birthday.map() });

let mailOptions = {
    from: "birthdaytrackermail@gmail.com",
    to: User.findOne({ email: req.params.email }), // email address to be fetched here
    subject: "Happy Birthday🎈",
    text: `Say happy birthday to ${name}` // name to be fetched here
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