import React from "react";
import {fetchPurchases} from "@/app/(user)/fetchPurchases";
import {GenericListPage} from "@/app/(products)/GenericListPage";

const AllPurchases = async ({
                                searchParams
                            }: { searchParams: Promise<{ page?: string; itemsPerPage?: string }> }) => {
    return (
        <GenericListPage
            searchParams={searchParams}
            props={{
                fetchData: ()=> fetchPurchases(),
                pageTitle: "All purchases",
                basePath: "/purchases",
                errorMessage: "Something went wrong",
            }}
        />
    )
};

export default AllPurchases;