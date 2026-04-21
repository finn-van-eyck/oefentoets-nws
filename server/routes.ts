import express, { Request, Response } from "express";
import path from "path";
import { News, getAllNews, getOneArticle, saveArticle } from "./services/newsservices";
import { brotliDecompressSync } from "zlib";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", async (req: Request, res: Response): Promise<void> => {
  const news: News[] = await getAllNews();
    res.render("nws", {News:news, title: "Nws" });

});

router.get("/nws_edit/:id", async (req: Request, res: Response): Promise<void> => {
    const id : number = parseInt(req.params.id as string);
    const article: News = await getOneArticle(id);
   res.render("nws_edit", { Article: article , title: "Nws-edit" });
});

//POST - REQUESTS
router.post("/nws_edit/:id", async (req:Request, res:Response): Promise<void> =>{
     const id : number = parseInt(req.params.id as string);
     //vervolgens gaan we de data ophalen
     const data = req.body
     saveArticle(id, data);
     console.log(data);
     res.redirect('/')
})

export default router;