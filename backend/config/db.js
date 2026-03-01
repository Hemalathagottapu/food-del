import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hemagottapu:Hema2006@cluster0.k5jqn0b.mongodb.net/food_delivary"
    );
    console.log("DB Connected ✅");
  } catch (error) {
    console.log("DB Connection Error ❌", error);
  }
};

export default connectDB;