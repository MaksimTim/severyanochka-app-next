import React from 'react'
import {ViewAllButton} from "@/components/ViewAllButton";
import {ArticleCard} from "@/app/(articles)/ArticleCard";
import {ArticleCardProps} from "@/types/articles";

interface ArticlesSectionProps {
    articles: ArticleCardProps[];
    title: string;
    viewAllButton?: { text: string; href: string };
    compact?: boolean;
}

export const ArticlesSection = ({articles, title, viewAllButton, compact = false}: ArticlesSectionProps) => {
    return (
        <section>
            <div className={`${!compact ? 'px-[max(12px,calc((100%-1208px)/2))] mt-20' : ''} flex flex-col justify-center text-[#414141]`}>
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold">{title}</h2>
                    {
                        viewAllButton && (
                            <ViewAllButton href={viewAllButton.href} btnText={viewAllButton.text}/>

                        )
                    }
                </div>

                {/* Список статей */}
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <li key={article.id}

                            className={`h-75 md:h-105 ${index >= 3 ? "hidden" : ""}`}>
                            <ArticleCard article={article}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
