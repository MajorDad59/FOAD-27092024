import "express-async-errors";
import express from "express";
import notFound from "./middlewares/not-found.middleware.js";
import errorHandler from "./middlewares/error-handler.js";
import connectDB from "./config/db.config.js";
const app = express();

connectDB();

app.use(express.json());

import { auth } from "./features/auth/index.js";

app.use("/api/v1/auth", auth);

app.use(notFound);
app.use(errorHandler);

export default app;
