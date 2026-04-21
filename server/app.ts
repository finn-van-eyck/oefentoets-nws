import express, { Application, Request, Response } from "express";
import routes from "./routes";

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use("/", routes)

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});