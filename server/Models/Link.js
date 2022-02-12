const mongoose = require("mongoose");

const Link = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },

        birthday: [
            {
                name: {
                    type: String,

                },
                date: {
                    type: String,

                },

            },
        ],
    },

);

module.exports = mongoose.model("Link", Link);