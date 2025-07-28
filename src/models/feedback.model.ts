import { Schema } from "mongoose";
import { FeedbackDocument } from "../types/types";
import mongoose from "mongoose";

const FeedbackSchema = new Schema<FeedbackDocument>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    type: {
      type: String,
      enum: ["bug", "suggestion", "praise", "question"],
      required: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: false,
    },
    status: {
      type: String,
      enum: ["new", "in_review", "resolved", "closed"],
      default: "new",
    },
    comments: [
      {
        by: { type: String, enum: ["admin", "user"] },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Feedback = mongoose.model<FeedbackDocument>(
  "Feedback",
  FeedbackSchema
);
