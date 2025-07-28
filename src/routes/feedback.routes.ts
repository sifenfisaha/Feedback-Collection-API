import { Router } from "express";
import { submitFeedback } from "../controllers/ feedback.controller";
import { isAuthenticated } from "@sifen/jwt-auth-api";
import { validateFeedback } from "../validators/feedback.validator";
import { validateRequest } from "../middlewares/validateRequest";

const router = Router();

router.post(
  "/",
  isAuthenticated.optional,
  validateFeedback,
  validateRequest,
  submitFeedback
);

export default router;
