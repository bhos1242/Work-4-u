import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      default: "userimg",
    },
    password: {
      type: String,
      required: true,
      default: "userpassword",
    },
    role: {
      type: String,
      enum: ["Tasker", "Task poster"], // Available roles: Tasker or Poster
      required: true,
    },
    // Additional fields can be added here based on your requirements
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
