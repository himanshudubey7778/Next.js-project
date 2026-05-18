import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';

export async function POST(request) {
  try {
    await connectDB(); // Database line-up karo
    const { username, password } = await request.json();

    // Check karo database mein user hai ya nahi
    const userExists = await User.findOne({ username });

    if (!userExists) {
      return NextResponse.json({ error: "User nahi mila! Pehle register karo." }, { status: 404 });
    }

    if (userExists.password !== password) {
      return NextResponse.json({ error: "Galat password, check karo!" }, { status: 401 });
    }

    return NextResponse.json({ message: "Tejjora-Shops mein aapka swagat hai! 🚀" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Server framework error!" }, { status: 500 });
  }
}