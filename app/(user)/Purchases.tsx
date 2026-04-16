import React from "react";
import {ProductCardProps} from "@/types/product";
import {fetchPurchases} from "@/app/(user)/fetchPurchases";
import {ProductsSection} from "@/app/(products)/ProductsSection";

export const Purchases = async () => {
    let purchases: ProductCardProps[] = [];

    try {
        purchases = await fetchPurchases();
    } catch {
        return <div className="text-red-500">Ошибка</div>;
    }

    return (
        <ProductsSection
            title="Purchases"
            viewAllButton={{text: 'all purchases', href: '/purchases'}}
            products={purchases}
            compact
        />
    );
};