import React from "react";
import {ProductsSection} from "@/app/(products)/ProductsSection";
import {fetchPurchases} from "@/app/(user)/fetchPurchases";

const AllNew = async () => {
    let purchases;

    try {
        purchases = await fetchPurchases();
    } catch {
        return <div>Ошибка</div>;
    }

    return (
        <ProductsSection
            title="all purchases"
            viewAllButton={{text: 'Go to main', href: '/'}}
            products={purchases}
        />
    );
};

export default AllNew;