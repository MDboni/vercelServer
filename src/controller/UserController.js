import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


// Registration
export const Registration = async (req, res) => {
  try {
    const { email, password, firstName, lastName, mobile } = req.body;
    // Password hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      mobile
    });

    res.status(201).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

// Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).select(
      "email password firstName lastName mobile"
    );

    if (!user || !user.password) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    // Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    const payload = { id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    const { password: pwd, ...userData } = user.toObject();

    res.status(200).json({ status: "success", token, data: userData });
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};
