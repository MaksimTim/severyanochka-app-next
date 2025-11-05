import React from 'react'
import Image from "next/image";
import database from "@/data/database.json";
import {ProductCard} from "@/components/ProductCard";

export const NewProducts = () => {
    const newProducts = database.products.filter((p) =>
        p.categories?.includes("new")
    );

    return (
        <section>
            <div className="flex flex-col ">
                <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
                        Новинки
                    </h2>
                    <button className="flex flex-row items-center gap-x-2 cursor-pointer">
                        <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
                            Все новинки
                        </p>
                        <Image
                            src="/icons-products/icon-arrow-right.svg"
                            alt="К новинкам"
                            width={24}
                            height={24}
                            sizes="24px"
                        />
                    </button>
                </div>
                <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
                    {newProducts.slice(0, 4).map((item, index) => (
                        <li
                            key={item.id}
                            className={`${index >= 4 ? "hidden" : ""}
            ${index >= 3 ? "md:hidden xl:block" : ""}
            ${index >= 4 ? "xl:hidden" : ""}
            `}
                        >
                            <ProductCard {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
