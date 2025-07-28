import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import { Express } from "express";

export const SecurityMiddlewares = (app: Express) => {
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
  });

  app.use(limiter);
};
