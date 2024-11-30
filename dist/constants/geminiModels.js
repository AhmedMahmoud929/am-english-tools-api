"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordFinderModel = exports.randomWordModel = exports.compAssessModel = exports.genAI = void 0;
const generative_ai_1 = require("@google/generative-ai");
const geminiConfig_1 = require("./geminiConfig");
exports.genAI = new generative_ai_1.GoogleGenerativeAI(geminiConfig_1.geminiAPIKey);
exports.compAssessModel = exports.genAI.getGenerativeModel({
    model: geminiConfig_1.geminiModel,
    systemInstruction: geminiConfig_1.geminiSystemInstructions.compAssessmenter,
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: geminiConfig_1.geminiResponseSchema.compAssessmenter,
    },
});
exports.randomWordModel = exports.genAI.getGenerativeModel({
    model: geminiConfig_1.geminiModel,
    systemInstruction: geminiConfig_1.geminiSystemInstructions.randomWordGenerator,
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: geminiConfig_1.geminiResponseSchema.randomWordGenerator,
    },
});
exports.wordFinderModel = exports.genAI.getGenerativeModel({
    model: geminiConfig_1.geminiModel,
    systemInstruction: geminiConfig_1.geminiSystemInstructions.wordFinder,
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: geminiConfig_1.geminiResponseSchema.wordFinder,
    },
});
