import express from "express";
import morgan from "morgan";
import autRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", autRoutes);
app.use("/api", tasksRoutes);

export default app;
