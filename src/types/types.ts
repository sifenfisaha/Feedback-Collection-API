import mongoose, { Document } from "mongoose";

export type FeedbackType = "bug" | "suggestion" | "praise" | "question";
export type FeedbackStatus = "new" | "in_review" | "resolved" | "closed";

export interface FeedbackDocument extends Document {
  user?: mongoose.Types.ObjectId;
  type: FeedbackType;
  message: string;
  rating?: string;
  status: FeedbackStatus;
  comments: {
    by: "admin" | "users";
    text: string;
    createdAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
