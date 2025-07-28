import mongoose from "mongoose";

export const connectDb = async (cb: () => void): Promise<void> => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
    if (cb) cb();
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
  }
};
