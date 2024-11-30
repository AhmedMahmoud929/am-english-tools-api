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
exports.getComprehensionAssessment = void 0;
const geminiConfig_1 = require("../constants/geminiConfig");
const geminiModels_1 = require("../constants/geminiModels");
const getComprehensionAssessment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { word, example } = req.body;
        if (!word || !example) {
            res
                .status(401)
                .json({ success: false, error: "Word and Example are required" });
            return;
        }
        const modelRes = yield geminiModels_1.compAssessModel.generateContent(geminiConfig_1.geminiPrompts.compAssessmenter(word, example));
        const modelResText = modelRes.response.text();
        const { score, feedback, correctedVersion } = JSON.parse(modelResText);
        res.status(200).json({ score, feedback, correctedVersion });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});
exports.getComprehensionAssessment = getComprehensionAssessment;
