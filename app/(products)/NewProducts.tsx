import React from 'react'
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import {ProductsSection} from "@/app/(products)/ProductsSection";

export const NewProducts = async () => {
    let products;

    try {
        products = await fetchProductsByCategory('new');
    } catch {
        return <div>Ошибка</div>;
    }

    return (
        <ProductsSection
            title="Новинки"
            viewAllButton={{text: 'all new', href: '/new'}}
            products={products}
            compact={true}
        />
    );
};
