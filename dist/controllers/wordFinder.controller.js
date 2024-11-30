"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDetailedWord = exports.getRandomWord = void 0;
const geminiConfig_1 = require("../constants/geminiConfig");
const generateRand_1 = require("../utils/generateRand");
const geminiModels_1 = require("../constants/geminiModels");
const getRandomWord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const level = req.query.level || (0, generateRand_1.getRandLevel)();
        const interest = req.query.interest || (0, generateRand_1.getRandInterest)();
        const modelRes = yield geminiModels_1.randomWordModel.generateContent(geminiConfig_1.geminiPrompts.randomWordGenerator(level, interest));
        const modelResText = modelRes.response.text();
        const randomWord = JSON.parse(modelResText);
        res.status(200).json({ level, interest, randomWord });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});
exports.getRandomWord = getRandomWord;
const getDetailedWord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const level = req.query.level || (0, generateRand_1.getRandLevel)();
        const interest = req.query.interest || (0, generateRand_1.getRandInterest)();
        const word = req.query.word;
        if (!word)
            res.status(200).json({ error: "Word param is required" });
        else {
            const modelRes = yield geminiModels_1.wordFinderModel.generateContent(geminiConfig_1.geminiPrompts.wordFinder(word));
            const modelResText = modelRes.response.text();
            const { definition, examples, synonyms, antonyms } = JSON.parse(modelResText);
            res.status(200).json({ definition, examples, synonyms, antonyms });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});
exports.getDetailedWord = getDetailedWord;
