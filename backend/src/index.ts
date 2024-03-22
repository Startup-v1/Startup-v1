import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const dbUri: any = process.env.DB_URL;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello there!");
});

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
