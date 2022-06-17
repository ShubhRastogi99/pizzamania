const express = require('express')
const router = express.Router()
const User = require('../models/usermodel')

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User Already Exists");
    }

    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
      });
    } else {
      res.status(400);
      throw new Error("Something went wrong");
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Email or password");
    }
})

router.get("/getallusers", async(req, res) => {
  try {
    const users = await User.find({})
    res.status(200).send(users)
  } catch(err) {
    console.log(err);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
}) 

router.post('/deleteuser', async (req, res) => {
  const userid = req.body.userid
  try {
    await User.findOneAndDelete({_id: userid})
    res.status(200).send("deleted")
  } catch(err) {
    console.log(err);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
})

module.exports = router;