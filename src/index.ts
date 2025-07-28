import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./configs/mongodb.config";
import { auth } from "@sifen/jwt-auth-api";
import { user } from "@sifen/jwt-auth-api";
import { SecurityMiddlewares } from "./middlewares/security";
import feedbackRoutes from "./routes/feedback.routes";

const app = express();
SecurityMiddlewares(app);

const PORT = process.env.PORT;

app.use(express.json());
app.use(auth());
app.use(user());
app.use("/api/feedback", feedbackRoutes);

connectDb(() =>
  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
);
