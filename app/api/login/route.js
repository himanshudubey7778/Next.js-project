import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB Connection Switch
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

/* =======================================================
   1. POST METHOD - Create/Add New Product (Sir's Standard)
   ======================================================= */
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const db = mongoose.connection.db;

    // Direct collection injection
    const newProduct = await db.collection("products").insertOne({
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json(
      { 
        success: true, 
        Message: "Product Created Successfully! 🛒", 
        id: newProduct.insertedId 
      }, 
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

/* =======================================================
   2. PUT METHOD - Update Existing Product (Today's Class Logic)
   ======================================================= */
export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    // Dynamic URL se product ID capture karein
    const { id } = params; 
    const body = await request.json();

    const db = mongoose.connection.db;
    
    // Sir ka Logic: ObjectId matching with $set operator
    const updateResult = await db.collection("products").updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { 
        $set: { 
          ...body, 
          updatedAt: new Date() // Audit timestamp
        } 
      }
    );

    if (updateResult.matchedCount === 0) {
      return NextResponse.json(
        { success: false, Message: "Product nahi mila! Check ID." },
        { status: 404 }
      );
    }

    // Success response format exactly like sir's dashboard
    return NextResponse.json(
      { 
        success: true, 
        Message: "Document Updated Successfully! 🚀",
        matched: updateResult.matchedCount,
        modified: updateResult.modifiedCount
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}