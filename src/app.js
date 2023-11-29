import express from "express";
import morgan from "morgan";
import autRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import tasksRoutes from "./routes/tasks.routes.js";

import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", autRoutes);
app.use("/api", tasksRoutes);
app.use("/api", productRoutes);

export default app;
