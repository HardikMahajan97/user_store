import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/user_store";
const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB error:", err);
});

export default connectDB;