import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbackRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
  async create(data: FeedbackCreateData) {
  
    await prisma.feedback.create({
      data: {
        type: data.type,
        comment: data.comment,
        screenshot: data.screenshot,
      },
    });
  }
}
