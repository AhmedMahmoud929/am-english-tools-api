import express, { Application } from "express";
import { apiPrefix } from "./constants";
import cors from "cors";
import wordFinderRoutes from "./routes/wordFinder.route";
import compAssessRoutes from "./routes/compAssess.route";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use(`${apiPrefix}/word-finder`, wordFinderRoutes);
app.use(`${apiPrefix}/comprehension-assessment`, compAssessRoutes);

// For demonstration purposes, let's add a simple route
app.get("/test", (req, res) => {
  res.json({ message: "CORS is now enabled for all origins!" });
});

// Default error handling
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
