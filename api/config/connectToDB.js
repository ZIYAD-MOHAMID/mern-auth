import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_CLOUD_URI);
    console.log("MongoDB Connected ^_^");
  } catch (err) {
    console.log("Connection Failed To MongoDB! \n", err);
  }
}
