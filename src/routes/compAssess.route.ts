import { Router } from "express";
import { getComprehensionAssessment } from "../controllers/CompAssess.controller";

const router = Router();

router.post("/", getComprehensionAssessment);

export default router;
