import {shuffleArray} from "@/utils/shuffleArray";
import {ProductCardProps} from "@/types/product";

export const fetchProductsByCategory = async (category: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${category}`);

        if (!res.ok) throw new Error(`Failed to fetch ${category}`);

       const products: ProductCardProps[] = await res.json();

       const availableProducts: ProductCardProps[] = products.filter(product => product.quantity > 0);

       return shuffleArray(availableProducts);
    } catch (err) {
        console.log(err)
        throw err;
    }
}