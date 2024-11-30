"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandInterest = exports.getRandLevel = exports.getRandNum = void 0;
const getRandNum = (n) => {
    return Math.floor(Math.random() * n);
};
exports.getRandNum = getRandNum;
const getRandLevel = () => {
    const levels = [
        // A1-A2
        "A1.1",
        "A1.2",
        "A2.1",
        "A2.2",
        // B1-B2
        "B1.1",
        "B1.2",
        "B2.1",
        "B2.2",
        // C1-C2
        "C1.1",
        "C1.2",
        "C2.1",
        "C2.2",
    ];
    const index = (0, exports.getRandNum)(levels.length);
    return levels[index];
};
exports.getRandLevel = getRandLevel;
const getRandInterest = () => {
    const interests = [
        "travel",
        "sports",
        "technology",
        "food",
        "music",
        "movies",
        "art",
        "fashion",
        "history",
        "gaming",
        "literature",
        "photography",
        "fitness",
        "politics",
        "health",
        "nature",
        "animals",
        "science",
        "space",
        "economics",
        "psychology",
        "business",
        "coding",
        "language learning",
        "entrepreneurship",
        "architecture",
        "design",
        "traveling",
        "motor sports",
        "environment",
        "social media",
        "cooking",
        "painting",
        "education",
        "comedy",
        "DIY",
        "philosophy",
    ];
    const index = (0, exports.getRandNum)(interests.length);
    return interests[index];
};
exports.getRandInterest = getRandInterest;
