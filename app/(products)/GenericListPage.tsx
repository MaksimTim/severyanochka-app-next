import React from 'react'
import {GenericListPageProps} from "@/types/genericListPageProps";
import {ProductsSection} from "@/app/(products)/ProductsSection";
import {CONFIG} from "@/config/config";
import {PaginationWrapper} from "@/components/PaginationWrapper";
import {ArticlesSection} from "@/app/(articles)/ArticlesSection";

export const GenericListPage = async (
    {searchParams, props}: {
        searchParams: Promise<{ page?: string; itemsPerPage?: string }>
        props: GenericListPageProps
    }) => {
    let items
    let paginatedItems

    const params = await searchParams;
    const page = params?.page;
    const itemsPerPage = params.itemsPerPage || CONFIG.ITEMS_PER_PAGE;

    const currentPage = Number(page) || 1;
    const perPage = Number(itemsPerPage);
    const startIdx = (currentPage - 1) * perPage;

    try {
        items = await props.fetchData();
        paginatedItems = items.slice(startIdx, startIdx + perPage);

    } catch (e) {
        return (<div>{props.errorMessage}</div>)
    }

    return (
        <>
            {
                props.contentType === "articles" ?
                    (<ArticlesSection
                        title={props.pageTitle}
                        articles={paginatedItems}
                        viewAllButton={{text: 'Go to main', href: '/'}}
                    />) :
                    (<ProductsSection
                        title={props.pageTitle}
                        products={paginatedItems}
                        viewAllButton={{text: 'Go to main', href: '/'}}
                    />)
            }


            {
                items.length > perPage && (
                    <PaginationWrapper
                        totalItems={items.length}
                        currentPage={currentPage}
                        basePath={props.basePath}
                        contentType={props.contentType}
                    />
                )
            }
        </>
    )
}
