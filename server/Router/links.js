const router = require("express").Router();
const Link = require("../Models/Link");


router.get("/:uname", async (req, res) => {

    try {
        const userLink = await Link.findOne({ username: req.params.uname });
        res.status(200).json(userLink);
    }
    catch (err) {
        res.status(500).json(err);
    }


})






//CREATE LINK
router.put("/", async (req, res) => {


    try {

        // console.log(req.body);
        const exist_link = await Link.findOne({ username: req.body.username });

        if (!exist_link) {

            try {
                const newLink = new Link({
                    username: req.body.username,

                    birthday: req.body.birthday

                });

                const user = await newLink.save();
                console.log(user);
                res.status(200).json(user);
            } catch (err) {
                res.status(500).json(err);
            }
        }
        else {

            if (req.body.birthday.length) {
                exist_link.birthday = req.body.birthday;
                const user = await exist_link.save();
                res.status(200).json(user);
            }
            else
                res.status(200).json(exist_link);
        }
    }

    catch (err) {
        res.status(500).json(err);
    }



});


// DELETE

router.put("/del", async (req, res) => {

    // console.log(req.body);

    try {

        const exist_link = await Link.findOne({ username: req.body.username });

        if (exist_link) {

            if (req.body.birthday.length >= 0) {
                exist_link.birthday = req.body.birthday;
                const user = await exist_link.save();
                res.status(200).json(user);
            }
            else
                res.status(200).json(exist_link);



        }



    } catch (error) {
        console.log(error);

    }





});





module.exports = router;