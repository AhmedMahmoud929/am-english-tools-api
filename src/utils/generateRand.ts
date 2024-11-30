export const getRandNum = (n: number) => {
  return Math.floor(Math.random() * n);
};

export const getRandLevel = () => {
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
  const index = getRandNum(levels.length);
  return levels[index];
};

export const getRandInterest = () => {
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
  const index = getRandNum(interests.length);
  return interests[index];
};
