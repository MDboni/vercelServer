import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
  email: { type: String,},
  firstName: { type: String, },
  lastName: { type: String, },
  mobile: { type: String, },
  password: { type: String, },
  photo: { type: String, },
  createDate: { type: Date, default:Date.now() },
}, { versionKey:false });

const UserModel = mongoose.model("users", DataSchema);

export default UserModel;
