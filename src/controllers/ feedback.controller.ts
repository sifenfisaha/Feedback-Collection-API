import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";

export const submitFeedback = async (req: Request, res: Response) => {
  console.log((req as any).user);
  try {
    const { type, message, rating } = req.body;
    const feedback = await Feedback.create({
      type,
      message,
      rating,
      user: (req as any).user.id,
    });
    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      errors: error.message,
    });
  }
};
