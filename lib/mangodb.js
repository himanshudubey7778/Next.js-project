import mongoose from 'mongoose';

const connectDB = async () => {
  // Agar pehle se connected hai toh dobara connect mat karo
  if (mongoose.connections[0].readyState) {
    return; 
  }
  try {
    // process.env hamare secret file se link uthayega
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Sultanpur Amazon Database Connected successfully! 🚀");
  } catch (error) {
    console.log("Database connection failed! ❌", error);
  }
};

export default connectDB;