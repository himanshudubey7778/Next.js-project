import { betterAuth } from "better-auth";
import mongoose from "mongoose";

// Strict database connection framework for multi-worker production builds
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Atlas Securely Connected to Auth System Layer! 🛰️");
  } catch (err) {
    console.error("Database Auth Connection Error:", err.message);
  }
};

// Core Backend Security instance configuration
export const auth = betterAuth({
  database: {
    // Direct MongoDB native database interaction connection
    db: mongoose.connection.db || await connectDB()
  },
  emailAndPassword: {
    enabled: true // Sir ki class ka standard toggle match check
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production" // Auto handle secure pipeline
  }
});