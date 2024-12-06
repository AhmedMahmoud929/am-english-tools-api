import { SchemaType } from "@google/generative-ai";

export const geminiModel = "gemini-1.5-flash";
export const geminiAPIKey = "AIzaSyCNWah97hLHBBw9vjGKgnqq5ogambbKAzs";

export const geminiSystemInstructions = {
  randomWordGenerator: `Generate a random English word suitable for the user's proficiency level and interest. Provide a simple definition, three example sentences, synonyms, antonyms, and highlight its usage in different contexts.`,
  wordFinder: `Help the user explore a specific word. Provide a simple definition, three example sentences, synonyms, antonyms, and highlight its usage in different contexts. Use very easy way and English level, use A1 level in description and A2 in examples`,
  compAssessmenter: `I'm trying to gain some vocab, so I've just learned some new words. I want to ensure that I have understood them well, So I'll provide you with the word and an example of it, and I want you to assess my comprehension of this word and give me a degree from 100 and give me a PASS or FAIL based on it, please tell me and teach me about it. Make your response ain't too long. And also do not be so hard, be friendly but realistic. Also if you felt if I got the full comprehension give me the full degree, do not be so cruel if I'm right`,
};

export const geminiPrompts = {
  // Random word prompt
  randomWordGenerator: (level: string, interest: string) =>
    `Generate a random word suitable for a ${level} level student interested in ${interest} topic.`,
  // Word finder prompt
  wordFinder: (word: string, level?: string, interest?: string) =>
    `- Word: "${word}" `,
  // Comprehension assessmenter prompt
  compAssessmenter: (word: string, example: string) =>
    `- Word: "${word}"
- Example: "${example}"`,
};

export const geminiResponseSchema = {
  randomWordGenerator: {
    type: SchemaType.OBJECT,
    description: "Generated random word with detailed exploration.",
    properties: {
      word: {
        type: SchemaType.STRING,
        description: "The random generated word.",
      },
      definition: {
        type: SchemaType.STRING,
        description: "Simple definition of the word.",
      },
      examples: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Three example sentences using the word.",
      },
      synonyms: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Synonyms of the word.",
      },
      antonyms: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Antonyms of the word.",
      },
    },
    required: ["word", "definition", "examples", "synonyms", "antonyms"],
  },
  wordFinder: {
    type: SchemaType.OBJECT,
    description: "Detailed exploration of a specific word.",
    properties: {
      definition: {
        type: SchemaType.STRING,
        description: "Simple definition of the word.",
      },
      examples: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Three example sentences using the word.",
      },
      synonyms: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Synonyms of the word.",
      },
      antonyms: {
        type: SchemaType.ARRAY,
        items: { type: SchemaType.STRING },
        description: "Antonyms of the word.",
      },
    },
    required: ["definition", "examples", "synonyms", "antonyms"],
  },
  compAssessmenter: {
    type: SchemaType.OBJECT,
    description:
      "Assessment of a user-provided sentence for correctness and appropriateness.",
    properties: {
      score: {
        type: SchemaType.NUMBER,
        description: "Assessment score (out of 100).",
      },
      feedback: {
        type: SchemaType.STRING,
        description: "Feedback for improvement.",
      },
      correctedVersion: {
        type: SchemaType.STRING,
        description: "Corrected version of the example if it was wrong",
        nullable: true,
      },
    },
    required: ["score", "feedback"],
  },
};
