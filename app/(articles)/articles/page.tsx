import {Article} from "@/types/articles";
import React from "react";
import {fetchArticles} from "@/app/(articles)/fetchArticles";
import {ArticlesSection} from "@/app/(articles)/ArticlesSection";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Articles Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllArticles = async () => {
    let articles: Article[] = [];
    let error = null;

    try {
        articles = await fetchArticles();
    } catch (err) {
        error = 'Ошибка получения статей'
        console.log(err)
    }

    if (error) {
        return <div>Ошибка: {error}</div>
    }

    return (
        <ArticlesSection articles={articles} title="All Articles" viewAllButton={{text: 'Go to main', href: '/'}} />
    );
};

export default AllArticles;