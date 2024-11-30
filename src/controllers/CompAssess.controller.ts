import { Request, Response } from "express";
import { geminiPrompts } from "../constants/geminiConfig";
import { compAssessModel } from "../constants/geminiModels";

export const getComprehensionAssessment = async (
  req: Request,
  res: Response
) => {
  try {
    const { word, example } = req.body;
    if (!word || !example) {
      res
        .status(401)
        .json({ success: false, error: "Word and Example are required" });
      return;
    }

    const modelRes = await compAssessModel.generateContent(
      geminiPrompts.compAssessmenter(word, example)
    );
    const modelResText = modelRes.response.text();
    const { score, feedback, correctedVersion } = JSON.parse(modelResText);
    res.status(200).json({ score, feedback, correctedVersion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
