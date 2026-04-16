import React from "react";
import {fetchProductsByCategory} from "@/app/(products)/fetchProducts";
import type {Metadata} from "next";
import {GenericListPage} from "@/app/(products)/GenericListPage";

export const metadata: Metadata = {
    title: "Actions Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllActions = async ({
   searchParams
}: { searchParams: Promise<{ page?: string; itemsPerPage?: string }> }) => {
    return (
        <GenericListPage
            searchParams={searchParams}
            props={{
                fetchData: ()=> fetchProductsByCategory("actions"),
                pageTitle: "All Actions",
                basePath: "/actions",
                errorMessage: "Something went wrong",
            }}

        />
    )
};

export default AllActions;