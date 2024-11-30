import { Router } from "express";
import {
  getDetailedWord,
  getRandomWord,
} from "../controllers/wordFinder.controller";

const router = Router();

router.get("/", getDetailedWord);
router.get("/random", getRandomWord);

export default router;
