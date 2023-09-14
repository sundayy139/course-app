import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
require("dotenv").config();
import JWT from "jsonwebtoken";

const emailRegexPatern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
  isVerify: boolean;
  courses: Array<{ courseId: string }>;
  comparePassword: (password: string) => Promise<boolean>;
  SignAccessToken: () => string;
  SignRefreshToken: () => string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter your name"],
    },
    email: {
      type: String,
      require: [true, "Please enter your email"],
      validate: {
        validator: function (value: string) {
          return emailRegexPatern.test(value);
        },
        message: "Please enter valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please enter your password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerify: {
      type: Boolean,
      default: false,
    },
    courses: [
      {
        courseId: String,
      },
    ],
  },
  { timestamps: true }
);

// hash password before save
userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// sign access token
userSchema.methods.SignAccessToken = function () {
  return JWT.sign({ id: this._id }, process.env.ACCESS_TOKEN || "");
};

// sign refresh token
userSchema.methods.SignRefreshToken = function () {
  return JWT.sign({ id: this._id }, process.env.REFRESH_TOKEN || "");
};

// compare password
userSchema.methods.comparePassword = async function (
  enterdPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enterdPassword, this.password);
};

const userModel: Model<IUser> = mongoose.model("User", userSchema);

export default userModel;
