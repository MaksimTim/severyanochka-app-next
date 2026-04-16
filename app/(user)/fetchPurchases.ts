import {ProductCardProps} from "@/types/product";

export const fetchPurchases = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/purchases`, {});

        if (!res.ok) throw new Error(`Failed to fetch`);

        const purchases: ProductCardProps[] = await res.json();
        return purchases;
    } catch (err) {
        console.log(err)
        throw err;
    }
}