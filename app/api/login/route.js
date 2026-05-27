import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ success: false, Message: "Credentials Missing!" }, { status: 400 });
    }

    const db = mongoose.connection.db;
    // Direct manual check bypass for production build lock
    const user = await db.collection("users").findOne({ email: email });

    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, Message: "Invalid Credentials!" }, { status: 401 });
    }

    return NextResponse.json({ 
      success: true, 
      Message: "Login Successful in Tejjora-Shops! 🚀",
      user: { email: user.email }
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}