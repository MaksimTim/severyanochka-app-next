import React from "react";
import {fetchArticles} from "@/app/(articles)/fetchArticles";
import type {Metadata} from "next";
import {GenericListPage} from "@/app/(products)/GenericListPage";

export const metadata: Metadata = {
    title: "Articles Северяночка",
    description: "Покупка и доставка продуктов питания",
};

const AllArticles = async ({
                               searchParams
                           }: { searchParams: Promise<{ page?: string; itemsPerPage?: string }> }) => {
    return (
        <GenericListPage
            searchParams={searchParams}
            props={{
                fetchData: () => fetchArticles(),
                pageTitle: "All articles",
                basePath: "/articles",
                errorMessage: "Something went wrong",
                contentType: 'articles'
            }}
        />
    )
};

export default AllArticles;