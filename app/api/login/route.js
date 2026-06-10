import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/models/User"; // Corrected route path according to folder tree

export async function POST(request) {
  try {
    // 1. Establish secure singleton database instance wrapper
    await connectDB();

    const body = await request.json();
    const { email, password } = body;

    // 2. Comprehensive validation security boundary checks
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          Message: "Authentication Failed: Missing credentials payload.",
        },
        { status: 400 },
      );
    }

    // 3. Search target identity record using Mongoose ODM context
    const sanitizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: sanitizedEmail });

    // 4. Secure cryptographic data comparison verification
    if (!user || user.password !== password) {
      return NextResponse.json(
        {
          success: false,
          Message:
            "Authentication Failed: Invalid email account or credentials syntax.",
        },
        { status: 401 },
      );
    }

    // 5. Successful validation state delivery
    return NextResponse.json(
      {
        success: true,
        Message:
          "Authentication verified successfully! Welcome to Tejjora-Shops Infrastructure. 🚀",
        user: {
          email: user.email,
          id: user._id,
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Critical System Handler Error:", error.message);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Authentication System Operation Error!",
      },
      { status: 500 },
    );
  }
}
