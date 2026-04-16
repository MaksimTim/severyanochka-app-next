import React from "react";
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import {ProductsSection} from "@/app/(products)/ProductsSection";

export const Actions = async () => {
    let products;

    try {
        products = await fetchProductsByCategory('actions');
    } catch {
        return <div>Ошибка</div>;
    }

    return (
        <ProductsSection
            title="Акции"
            viewAllButton={{text: 'all actions', href: '/actions'}}
            products={products}
            compact={true}
        />
    );
};