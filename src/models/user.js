import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username required"],
      minLength: [4, "Username must be at least 4 characters long"],
      maxLength: [20, "Username cannot be longer than 20 characters"],
      validate: {
        validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
        message: "Username can only contain letters, numbers, and underscores",
      },
    },
    // role:{type:String ,require:true },
    password: {
      type: String,
      required: [true, "User password required"],
      minLength: [4, "User password must be at least 4 characters long"],
      
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Users", userSchema);
