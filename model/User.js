import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Please provide a email !"],
      unique: true,
      lowercase: true,
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "Please provide valid email",
      ],
    },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const User = new mongoose.model("User", userSchema);

export default User;
