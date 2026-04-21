import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/nws.html"));
});

router.get("/nws_edit", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/nws_edit.html"));
});

export default router;