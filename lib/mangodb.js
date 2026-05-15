import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Agar pehle se connected hai toh kuch mat karo
  }
  try {
    // Ye URI humein MongoDB Atlas se milegi
    await mongoose.connect('YOUR_MONGODB_URI_HERE');
    console.log("Database connected successfully! 🚀");
  } catch (error) {
    console.log("Database connection failed! ❌", error);
  }
};

export default connectDB;