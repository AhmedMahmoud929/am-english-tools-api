"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CompAssess_controller_1 = require("../controllers/CompAssess.controller");
const router = (0, express_1.Router)();
router.post("/", CompAssess_controller_1.getComprehensionAssessment);
exports.default = router;
