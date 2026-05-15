import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true },
}, { timestamps: true });

// Agar model pehle se bana hai toh wahi use karo, nahi toh naya banao
export default mongoose.models.User || mongoose.model('User', UserSchema);