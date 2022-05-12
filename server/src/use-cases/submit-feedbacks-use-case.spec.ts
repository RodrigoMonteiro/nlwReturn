import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendEmail: async () => {} }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Bug",
        comment: "comentario",
        screenshot: "test.png",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "comentario",
        screenshot: "test.png",
      })
    ).rejects.toThrow();
  });
});
