import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL!
    );
  } catch (error) {
    console.log(`DB connection failed: ${error}`);
    process.exit(1);
  }
};
