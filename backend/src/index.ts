import express from "express";
import mongoose from "mongoose";
import cityRoutes from "./routes/cityRoutes";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbUri: any = process.env.DB_URL;
app.use(cors());

// Use routes
app.use("/api", cityRoutes);

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
