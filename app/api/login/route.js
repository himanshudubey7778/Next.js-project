import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDB(); // Database se connect karo
    const { username, password } = await request.json();

    // Database mein user dhoondo
    const user = await User.findOne({ username, password });

    if (user) {
      return NextResponse.json({ message: "Login Successful", user }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}