import {Article} from "@/types/articles";
import React from "react";
import {ArticlesSection} from "@/app/(articles)/ArticlesSection";
import {fetchArticles} from "@/app/(articles)/fetchArticles";

export const Articles = async () => {
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
        <ArticlesSection articles={articles} title="Articles" viewAllButton={{text: 'All articles', href: '/articles'}} compact />
    );
};