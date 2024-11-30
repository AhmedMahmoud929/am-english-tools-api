"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geminiResponseSchema = exports.geminiPrompts = exports.geminiSystemInstructions = exports.geminiAPIKey = exports.geminiModel = void 0;
const generative_ai_1 = require("@google/generative-ai");
exports.geminiModel = "gemini-1.5-flash";
exports.geminiAPIKey = "AIzaSyCNWah97hLHBBw9vjGKgnqq5ogambbKAzs";
exports.geminiSystemInstructions = {
    randomWordGenerator: `Generate a random English word suitable for the user's proficiency level and interest. Provide a simple definition, three example sentences, synonyms, antonyms, and highlight its usage in different contexts.`,
    wordFinder: `Help the user explore a specific word. Provide a simple definition, three example sentences, synonyms, antonyms, and highlight its usage in different contexts.`,
    compAssessmenter: `I'm trying to gain some vocab, so I've just learned some new words. I want to ensure that I have understood them well, So I'll provide you with the word and an example of it, and I want you to assess my comprehension of this word and give me a degree from 100 and give me a PASS or FAIL based on it, please tell me and teach me about it. Make your response ain't too long. And also do not be so hard, be friendly but realistic`,
};
exports.geminiPrompts = {
    // Random word prompt
    randomWordGenerator: (level, interest) => `Generate a random word suitable for a ${level} level student interested in ${interest} topic.`,
    // Word finder prompt
    wordFinder: (word, level, interest) => `- Word: "${word}" `,
    // Comprehension assessmenter prompt
    compAssessmenter: (word, example) => `- Word: "${word}"
- Example: "${example}"`,
};
exports.geminiResponseSchema = {
    randomWordGenerator: {
        type: generative_ai_1.SchemaType.OBJECT,
        description: "Generated random word with detailed exploration.",
        properties: {
            word: {
                type: generative_ai_1.SchemaType.STRING,
                description: "The random generated word.",
            },
            definition: {
                type: generative_ai_1.SchemaType.STRING,
                description: "Simple definition of the word.",
            },
            examples: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Three example sentences using the word.",
            },
            synonyms: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Synonyms of the word.",
            },
            antonyms: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Antonyms of the word.",
            },
        },
        required: ["word", "definition", "examples", "synonyms", "antonyms"],
    },
    wordFinder: {
        type: generative_ai_1.SchemaType.OBJECT,
        description: "Detailed exploration of a specific word.",
        properties: {
            definition: {
                type: generative_ai_1.SchemaType.STRING,
                description: "Simple definition of the word.",
            },
            examples: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Three example sentences using the word.",
            },
            synonyms: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Synonyms of the word.",
            },
            antonyms: {
                type: generative_ai_1.SchemaType.ARRAY,
                items: { type: generative_ai_1.SchemaType.STRING },
                description: "Antonyms of the word.",
            },
        },
        required: ["definition", "examples", "synonyms", "antonyms"],
    },
    compAssessmenter: {
        type: generative_ai_1.SchemaType.OBJECT,
        description: "Assessment of a user-provided sentence for correctness and appropriateness.",
        properties: {
            score: {
                type: generative_ai_1.SchemaType.NUMBER,
                description: "Assessment score (out of 100).",
            },
            feedback: {
                type: generative_ai_1.SchemaType.STRING,
                description: "Feedback for improvement.",
            },
            correctedVersion: {
                type: generative_ai_1.SchemaType.STRING,
                description: "Corrected version of the example if it was wrong",
                nullable: true,
            },
        },
        required: ["score", "feedback"],
    },
};
