import express, { Application, Request, Response } from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import dotenv from 'dotenv';
dotenv.config();
import routes from "./routes";

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

// EJS als template-engine instellen
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware voor layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

//Middleware die de body bij onze POST request gaat kunne parsen
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", routes)

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});