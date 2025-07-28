import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./configs/mongodb.config";
import { auth } from "@sifen/jwt-auth-api";
import { user } from "@sifen/jwt-auth-api";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(auth());
app.use(user());

connectDb(() =>
  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
);
