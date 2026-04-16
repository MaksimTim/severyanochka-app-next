import React from "react";
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import {ProductsSection} from "@/app/(products)/ProductsSection";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "New Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllNew = async () => {
    let products;

    try {
        products = await fetchProductsByCategory('new');
    } catch {
        return <div>Ошибка</div>;
    }

    return (
        <ProductsSection
            title="All new"
            viewAllButton={{text: 'Go to main', href: '/'}}
            products={products}
        />
    );
};

export default AllNew;