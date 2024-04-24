import express from "express";
import bookRouter from "./book.router.js";

const app = express();

app.use(express.json());

app.use("/api", bookRouter);

export default app;
