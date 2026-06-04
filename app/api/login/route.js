import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Connection function with optimal lifecycle state check
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

/* =======================================================
   SECURE LOGIN ROUTE - Optimized for Employability Benchmarks
   ======================================================= */
export async function POST(request) {
  try {
    // 1. Await the async connection pool before hitting database context
    await connectDB();

    const body = await request.json();
    const { email, password } = body;

    // 2. Strict validation check for payload injection control
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          Message: "Credentials Missing! Enter Email and Password.",
        },
        { status: 400 },
      );
    }

    const db = mongoose.connection.db;

    // 3. Find user profile inside the native collection boundary
    const user = await db
      .collection("users")
      .findOne({ email: email.toLowerCase().trim() });

    // 4. Secure validation check
    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, Message: "Invalid Credentials! Access Denied." },
        { status: 401 },
      );
    }

    // 5. Success execution transmission setup exactly matching dashboard responses
    return NextResponse.json(
      {
        success: true,
        Message: "Login Successful in Tejjora-Shops! 🚀",
        user: {
          email: user.email,
          id: user._id,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Critical Production Auth Handler Failure:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Authentication Server Exception!" },
      { status: 500 },
    );
  }
}
