import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Critical System Exception: Please define the MONGODB_URI environment variable inside .env.local",
  );
}

/**
 * Global caching layer to maintain a single connection pool
 * across hot-reloaded development modules in Next.js.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log(
          "🚀 Secure Cloud Database Connection Initialized Successfully.",
        );
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error(
      "❌ Critical Database Connection Layer Failed:",
      error.message,
    );
    throw error;
  }

  return cached.conn;
}
