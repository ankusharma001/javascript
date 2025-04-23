import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  avatar: {
    type: String,
    required: true,
  },
  coverIMAGE: {
    type: String,
    required: false,
  },
  watchHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WatchHistory",
  }],
  refreshToken: {
    type: String,
    required: false,
  },
}, { timestamps: true });

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userschema.methods.isPasswordcorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userschema.methods.generateAccessToken = function () {
  return jwt.sign({
    id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
};

userschema.methods.generateRefreashToken = function () {
  return jwt.sign({
    id: this._id,
    email: this.email,
    username: this.username,
    fullname: this.fullname,
  }, process.env.Refresh_TOKEN_SECRET, {
    expiresIn: process.env.Refresh_TOKEN_EXPIRY,
  });
};

export const User = mongoose.model("User", userschema);