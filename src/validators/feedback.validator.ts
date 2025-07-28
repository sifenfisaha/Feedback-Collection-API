import { body } from "express-validator";

export const validateFeedback = [
  body("type")
    .isIn(["bug", "suggestion", "praise", "question"])
    .withMessage("Invalid feedback type"),

  body("message")
    .isLength({ min: 5 })
    .withMessage("Message must be at least 5 characters long"),

  body("rating")
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("source").optional().isObject(),
];
