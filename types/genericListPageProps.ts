import {ProductCardProps} from "@/types/product";
import {ArticleCardProps} from "@/types/articles";

type ContentItem = ProductCardProps | ArticleCardProps

export interface GenericListPageProps {
    fetchData: () => Promise<ProductCardProps[]>
    pageTitle: string
    basePath: string
    errorMessage?: string
    contentType?: "articles"
}