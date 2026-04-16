import React from "react";
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import type {Metadata} from "next";
import {GenericListPage} from "@/app/(products)/GenericListPage";

export const metadata: Metadata = {
    title: "New Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllNew = async ({
                          searchParams
                      }: { searchParams: Promise<{ page?: string; itemsPerPage?: string }> }) => {
    return (
        <GenericListPage
            searchParams={searchParams}
            props={{
                fetchData: ()=> fetchProductsByCategory("new"),
                pageTitle: "All new",
                basePath: "/new",
                errorMessage: "Something went wrong",
            }}

        />
    )
};

export default AllNew;