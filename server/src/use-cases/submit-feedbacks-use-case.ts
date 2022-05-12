import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required.");
    }
    if (!comment) {
      throw new Error("Comment is required.");
    }
    if (screenshot && !screenshot.startsWith("data:image")) {
      throw new Error("Invalid screenshot");
    }
    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendEmail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family="sans-serif; font-size: 16px; color:#111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Tipo de comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
