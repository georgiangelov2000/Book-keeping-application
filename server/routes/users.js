const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check("password","Please enter password with 6 or more characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email:email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists." }] });
      }
      user = new User({
        name,
        email,
        password,
      })
      await user.save();
    } catch (error) {
      console.error(error.message);
    }
  }
);

router.post("/login", async (req, res) => {
  const{ email, password}=req.body;
  const user=await User.findOne({email: email});
});

router.put("/update", async (req, res) => {
  res.send("update route");
});

router.delete("/delete/:id", async (req, res) => {
  res.send("delete route");
});

router.get("/", async (req, res) => {
  res.send("fetch users");
});
module.exports = router;
