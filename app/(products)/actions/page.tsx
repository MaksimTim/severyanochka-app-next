import React from "react";
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import {ProductsSection} from "@/app/(products)/ProductsSection";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Actions Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllActions = async () => {
    let products;

    try {
        products = await fetchProductsByCategory('actions');
    } catch {
        return <div>Ошибка</div>;
    }

    return (
        <ProductsSection
            title="All actions"
            viewAllButton={{text: 'Go to main', href: '/'}}
            products={products}
        />
    );
};

export default AllActions;