import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log(`DB URI: ${URI}`);
const connect = async () => {
  try {
    await mongoose.connect(URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};

mongoose.connection.on("error", () => {
  console.log("Database connection error");
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Database connected successfully");
});

export default connect;
