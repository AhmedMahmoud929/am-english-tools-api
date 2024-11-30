"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const cors_1 = __importDefault(require("cors"));
const wordFinder_route_1 = __importDefault(require("./routes/wordFinder.route"));
const compAssess_route_1 = __importDefault(require("./routes/compAssess.route"));
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use(`${constants_1.apiPrefix}/word-finder`, wordFinder_route_1.default);
app.use(`${constants_1.apiPrefix}/comprehension-assessment`, compAssess_route_1.default);
// For demonstration purposes, let's add a simple route
app.get("/", (req, res) => {
    res.json({ message: "Server is running..." });
});
// Default error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});
exports.default = app;
