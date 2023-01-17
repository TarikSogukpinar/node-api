import User from "../model/User.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        error: true,
        message: "You cannot register, email already exist",
      });
    }

    const hashedPass = await bcrypt.hashSync(req.body.password, 10);

    await new User({ ...req.body, password: hashedPass }).save();

    res.status(201).json({
      error: false,
      message: "Account created successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ error: true, message: "Email or Password is wrong!" });
    }

    const verifiedPassword = await bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!verifiedPassword) {
      return res
        .status(400)
        .json({ error: true, message: "Email or Password is wrong!" });
    }
    res.status(201).json({
      error: false,
      message: "Login successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};

export default { registerUser, loginUser };
