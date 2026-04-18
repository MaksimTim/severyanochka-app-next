import {Article} from "@/types/articles";

export const fetchArticles = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`);

        if (!res.ok) throw new Error(`Failed to fetch`);

        const articles: Article[] = await res.json();

        return articles;
    } catch (err) {
        console.log(err)
        throw err;
    }
}