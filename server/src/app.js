import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("DevSync API Running...");
});

app.use("/api/auth", authRoutes);

// Global Error Middleware MUST be the last middleware
app.use(errorMiddleware);

export default app;