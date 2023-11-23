import mongoose from "mongoose";
import { dbConnectiongString } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(dbConnectiongString);
    console.log(">>>> DB is conected");
  } catch (error) {
    console.log("Errro connecting to the database", error);
  }
};
