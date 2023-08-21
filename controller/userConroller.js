// registration controller 
const { UserModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userRegistered = async (req, res) => {
    const { email, password } = req.body;
    try {
        let existedUser = await UserModel.findOne({ email });
        if (existedUser) {
            res.status(200).json({ msg: "User already exists" })
        } else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) {
                    res.status(400).json({ msg: err.message })
                } else {
                    let newUser = new UserModel({
                        email, password: hash, confirm_password: hash
                    });
                    await newUser.save();
                    res.status(200).json({ msg: "new user added", newUser })
                }
            })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


// login logic here

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let userExisted = await UserModel.findOne({ email });
        if (userExisted) {
            bcrypt.compare(password, userExisted.password, async (err, result) => {
                if (err) {
                    res.status(400).json({ msg: "user is not verified" })
                } else {
                    let token = jwt.sign({ data: "sagar" }, "sagar", {
                        expiresIn: "7d"
                    });
                    res.status(200).json({ msg: "You are logged in ...", token })
                }
            })
        } else {
            res.status(400).json({ msg: "user does not exist please sign up first..." })
        }
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


module.exports = {
    userRegistered, userLogin
}