import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "non-binary"],
  },
  profilePicture: {
    type: String,
    default: "",
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema)
export default User