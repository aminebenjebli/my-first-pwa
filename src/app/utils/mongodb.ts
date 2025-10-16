import mongoose from "mongoose";

/**
 * Cached mongoose connection for serverless / Next.js environments.
 * Exports connectToDb to ensure only one connection is created during the process lifetime.
 */
// ensure a global cache so repeated imports reuse the same connection
if (!(globalThis as any)._mongooseCache) {
  (globalThis as any)._mongooseCache = { conn: null, promise: null };
}

let cached: {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} = (globalThis as any)._mongooseCache;

export async function connectToDb() {
  if (cached.conn) {
    // already connected
    return cached.conn;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  if (!cached.promise) {
    const opts = {
      // these options are defaults in newer mongoose versions but kept for clarity
      bufferCommands: false,
      // useNewUrlParser and useUnifiedTopology are defaults in Mongoose 6+
    } as any;

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB connected:", cached.conn.connection.name);
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
