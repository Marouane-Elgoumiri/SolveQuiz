const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BlacklistedToken = require('../models/BlacklistedToken')
const authMiddleware = require('../middlewares/authMiddleware');
const asyncHandler = require('express-async-handler')
//user Registration

router.post("/register", async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const userExists = await User.findOne({email: email});
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

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res
                .status(200).send({message: "User does not exist", success: false});
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword){
            return res
                .status(401).send({message: "Invalid password", success: false});
        }
        const token = jwt.sign(
            {userId: user._id}, process.env.JWT_SECRET,
            {expiresIn: "1d"}
            );
        res.send({
            message: "User successfully logged in",
            success: true,
            data: token
        })
    }catch (error) {
        console.log("invalid email or password")
        res.status(400).send({
            message: error.message,
            data: error,
            success : false
        })
    }
})
//Logout

router.post('/logout', async (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided', success: false });
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        const userId = decoded.userId;

        await BlacklistedToken.create({ token });

        res.json({ message: 'User successfully logged out', success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', success: false });
    }
});

//get user info
router.post('/get-user-info', authMiddleware, async (req, res) => {
    try{
        const user = await User.findById(req.body.userId);
        res.send({
            message: "User info fetched successfully",
            success: true,
            data: user,
        })
    }catch (e) {
        res.status(500).send({
            message: e.message,
            data: e,
            success: false,
        });
    }
});


module.exports = router;