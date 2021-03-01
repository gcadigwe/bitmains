const User = require("../models/User");
const validator = require("validator");

exports.RegisterController = async (req, res) => {
  if (!validator.isEmail(req.body.email))
    return res
      .status(400)
      .json({ error: { message: "Email Address is Invalid" } });

  // if (!validator.isBtcAddress(req.body.btcAddress))
  //   return res.json({ data: "Invalid Bitcoin Address" });

  // if (!validator.isEmpty(req.body.Fname))
  //   return res.json({ data: "First Name field cannot be left empty" });

  // if (!validator.isEmpty(req.body.email))
  //   return res.json({ data: "Email field cannot be left empty" });

  // if (!validator.isEmpty(req.body.btcAddress))
  //   return res.json({ data: "BTC address field cannot be left empty" });

  // if (!validator.isEmpty(req.body.password))
  //   return res.json({ data: "Password field cannot be left empty" });

  // if (!validator.isEmpty(req.body.Lname))
  //   return res.json({ data: "Last Name field cannot be left empty" });

  //Check if email already exists
  const emailExist = await User.findOne({ email: req.body.email }).exec();
  if (emailExist)
    return res.status(400).json({ error: { message: "Email already exists" } });

  try {
    const newUser = await new User({
      Fname: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).save();

    res.send(newUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

exports.LoginController = async (req, res) => {
  if (!validator.isEmail(req.body.email))
    return res
      .status(400)
      .json({ error: { message: "Email Address is Invalid" } });

  // if (!validator.isEmpty(req.body.email))
  //   return res.json({ data: "Email field cannot be left empty" });

  // if (!validator.isEmpty(req.body.password))
  //   return res.json({ data: "Password field cannot be left empty" });

  const user = await User.findOne({ email: req.body.email }).exec();
  if (!user)
    return res.status(400).json({ error: { message: "Email is wrong" } });

  const validpass = user.password === req.body.password;

  if (!validpass)
    return res.status(400).json({ error: { message: "password is wrong" } });

  res.send("logged in");
};
