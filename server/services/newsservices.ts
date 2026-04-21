import sql from "./db";

export interface News{
    id: number;
    title: string;
    author: string;
    category: string;
    published_date: string;
    status: string;
    summary: string;
    content: string;
    created_at: string;
    updated_at: string;
}

// Alle nieuwsartikelen ophalen
export async function getAllNews(): Promise<News[]> {
    const data : News[] = await sql`select * from news_articles ORDER BY id `;
    return data;
}

//een artikel kunnen laten zien zodat we deze kunnen laden per Id
export async function getOneArticle(id:number): Promise<News>{
    const data: News[] = await sql `SELECT * FROM news_articles WHERE id = ${id}`;
    //omdat je bij sql altijd een array teruggeeft maar het eigenlijk maar 1 index heeft nemen we gewoon de eerste waarde eruit.
    return data[0]
}

export async function saveArticle(id:number, data:any): Promise<void> {
     await sql`
    update news_articles
    set
      title = ${data.title},
      author = ${data.author},
      category = ${data.category},
      published_date = ${data.date},
      status = ${data.status},
      summary = ${data.summary},
      content = ${data.content}
    where id = ${id}
  `;
    //de WHERE id = ${data.id} is heel belangrijk anders pas je elke record aan, nu pas je enkel de record aan die gelijk is aan het id waar we ons in zetten. 
}