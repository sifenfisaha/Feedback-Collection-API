import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/mongodb.config";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectDb(() =>
  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
);
