import { GoogleGenerativeAI } from "@google/generative-ai";
import { Request, Response } from "express";
import {
  geminiAPIKey,
  geminiModel,
  geminiResponseSchema,
  geminiSystemInstructions,
} from "./geminiConfig";

export const genAI = new GoogleGenerativeAI(geminiAPIKey);

export const compAssessModel = genAI.getGenerativeModel({
  model: geminiModel,
  systemInstruction: geminiSystemInstructions.compAssessmenter,
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: geminiResponseSchema.compAssessmenter,
  },
});

export const randomWordModel = genAI.getGenerativeModel({
  model: geminiModel,
  systemInstruction: geminiSystemInstructions.randomWordGenerator,
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: geminiResponseSchema.randomWordGenerator,
  },
});

export const wordFinderModel = genAI.getGenerativeModel({
  model: geminiModel,
  systemInstruction: geminiSystemInstructions.wordFinder,
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: geminiResponseSchema.wordFinder,
  },
});
