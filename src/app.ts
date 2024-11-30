import express, { Application } from "express";
import { apiPrefix } from "./constants";
import cors from "cors";
import wordFinderRoutes from "./routes/wordFinder.route";
import compAssessRoutes from "./routes/compAssess.route";

const app: Application = express();

// Middlewares
app.use(express.json());
// Enable CORS for all routes
app.use(
  cors({
    origin: ["https://am-english-tools.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use(`${apiPrefix}/word-finder`, wordFinderRoutes);
app.use(`${apiPrefix}/comprehension-assessment`, compAssessRoutes);

// For demonstration purposes, let's add a simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is running...", cors: "Updated" });
});

// Default error handling
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export default app;
