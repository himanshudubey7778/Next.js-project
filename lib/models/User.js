import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email address."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a secure password."],
    },
  },
  {
    timestamps: true, // Automatically tracks createdAt and updatedAt lifecycle checkpoints
  },
);

// Avoid compiling the model multiple times during Next.js Hot Module reloads
export default mongoose.models.User || mongoose.model("User", UserSchema);
