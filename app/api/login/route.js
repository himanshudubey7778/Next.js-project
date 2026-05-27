import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { auth } from '../../../lib/auth'; // Better-Auth core backend file

// MongoDB Cloud Connection Utility
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

/* =======================================================
   API LOGIN ROUTE - Integrated with Better-Auth & Production Build
   ======================================================= */
export async function POST(request) {
  try {
    await connectDB(); // Ensure DB is live
    
    const body = await request.json();
    const { email, password } = body;

    // Field validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, Message: "Email and Password twince is  important!" },
        { status: 400 }
      );
    }

    // Sir's Better-Auth Login Trigger via Backend Context
    // that line database mein user credentials check doing and session session generate 
    const session = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });

    // If user validation fail is doing
    if (!session) {
      return NextResponse.json(
        { success: false, Message: "Wrong Email Any Password! Access Denied." },
        { status: 401 }
      );
    }

    // Production-Ready Success Response Format exactly like Sir's Standard
    return NextResponse.json(
      { 
        success: true, 
        Message: "Login Successful in Tejjora-Shops! 🚀", 
        user: session.user,
        token: session.token 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("Auth Login Backend Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Authentication Server Error!" },
      { status: 500 }
    );
  }
}