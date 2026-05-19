import { NextResponse } from 'next/server';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB Cloud Connection Utility
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// PUT Request Handler - Product ko ID se Update karne ke liye
export async function PUT(request, { params }) {
  try {
    await connectDB(); // Cloud database connect karo
    
    // URL se dynamic product ID nikalen
    const { id } = params; 
    
    // Postman/Thunder Client se bheja gaya body data read karo
    const body = await request.json();

    // Sir ka Logic: Mongoose database context ke zariye collection ko targets karo
    const db = mongoose.connection.db;
    
    // MongoDB updates with ObjectId matching and $set operator
    const updateResult = await db.collection("products").updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { 
        $set: { 
          ...body, 
          updatedAt: new Date() // Industry standard update timestamp
        } 
      }
    );

    // Agar koi matching product nahi mila
    if (updateResult.matchedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Product nahi mila! Check correct ObjectId." },
        { status: 404 }
      );
    }

    // Success Response (Sir ka Format)
    return NextResponse.json(
      { 
        success: true, 
        message: "Document Updated Successfully in Tejjora-Shops! 🚀",
        details: updateResult 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Database Update Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Backend Error!" },
      { status: 500 }
    );
  }
}