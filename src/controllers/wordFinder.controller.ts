import { Request, Response } from "express";
import { geminiPrompts } from "../constants/geminiConfig";
import { getRandInterest, getRandLevel } from "../utils/generateRand";
import { randomWordModel, wordFinderModel } from "../constants/geminiModels";

export const getRandomWord = async (req: Request, res: Response) => {
  try {
    const level = (req.query.level as string) || getRandLevel();
    const interest = (req.query.interest as string) || getRandInterest();

    const modelRes = await randomWordModel.generateContent(
      geminiPrompts.randomWordGenerator(level, interest)
    );
    const modelResText = modelRes.response.text();
    const randomWord = JSON.parse(modelResText);
    res.status(200).json({ level, interest, randomWord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getDetailedWord = async (req: Request, res: Response) => {
  try {
    const level = (req.query.level as string) || getRandLevel();
    const interest = (req.query.interest as string) || getRandInterest();
    const word = req.query.word as string;

    if (!word) res.status(200).json({ error: "Word param is required" });
    else {
      const modelRes = await wordFinderModel.generateContent(
        geminiPrompts.wordFinder(word)
      );
      const modelResText = modelRes.response.text();
      const { definition, examples, synonyms, antonyms } =
        JSON.parse(modelResText);
      res.status(200).json({ definition, examples, synonyms, antonyms });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
