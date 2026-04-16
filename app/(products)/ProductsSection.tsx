import React from 'react'
import {ViewAllButton} from "@/components/ViewAllButton";
import {ProductCard} from "@/components/ProductCard";
import {ProductCardProps} from "@/types/product";

interface ProductsSectionProps {
    title: string;
    products: ProductCardProps[];
    viewAllButton: { text: string; href: string };
    compact?: boolean;
}

export const ProductsSection = (
    {
        title,
        products,
        viewAllButton,
        compact = false
    }: ProductsSectionProps) => {
    return (
        <section>
            <div
                className={`${!compact ? 'px-[max(12px,calc((100%-1208px)/2))] mt-20' : ''} flex flex-col justify-center`}>
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold">{title}</h2>
                    <ViewAllButton href={viewAllButton.href} btnText={viewAllButton.text}/>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {products && products.map((item, index) => (
                        <li
                            key={item._id}
                            className={compact
                                ? `${index >= 4 ? "hidden" : ""}
                            ${index >= 3 ? "md:hidden xl:block" : ""}
                            ${index >= 4 ? "xl:hidden" : ""}
                            `
                                : ''
                            }
                        >
                            <ProductCard {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
