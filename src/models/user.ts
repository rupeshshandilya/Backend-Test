import { UserData } from "../types/types";
import mongoose from "mongoose";

interface UserDocument extends UserData, Document {}

const UserSchema = new mongoose.Schema<UserData>({
  name: { type: String, required: true, trim: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  photoUrl: { type: String, required: true },
});

export const User = mongoose.model("User", UserSchema);
