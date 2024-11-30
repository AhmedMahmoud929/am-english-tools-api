"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wordFinder_controller_1 = require("../controllers/wordFinder.controller");
const router = (0, express_1.Router)();
router.get("/", wordFinder_controller_1.getDetailedWord);
router.get("/random", wordFinder_controller_1.getRandomWord);
exports.default = router;
