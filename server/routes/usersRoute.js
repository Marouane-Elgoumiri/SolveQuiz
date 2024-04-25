const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//user Registration

router.post("/register", async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(200).send({message: "User already exists", success: false});
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashPassword });
        await newUser.save();
        res.send({
            message: "User successfully registered",
            success: true,
        })
    }catch (error) {
        res.status(500).send({
            message: error.message,
            data: error,
            success : false
        })
    }

});

// user login

router.get("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(user && bcrypt.compare(password, user.password)) {
            res.status(200).json({
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
            });
            console.log("logged in!")
        }
    }catch (error) {
        console.log("invalid email or password")
        res.status(400).send({
            message: error.message,
            data: error,
            success : false
        })
    }
})
module.exports = router;