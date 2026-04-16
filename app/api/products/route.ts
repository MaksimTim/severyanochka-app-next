import {getDB} from "@/utils/api-routes";
import {NextResponse} from "next/server";
export const revalidate = 3600

export async function GET(req: Request): Promise<Response> {
    try {
        const category = new URL(req.url).searchParams.get("category");

        if (!category) {
            return NextResponse.json({message: "Category not found"});
        }

        const db = await getDB();
        const products = await db.collection("products").find({categories: category}).toArray();

        return NextResponse.json(products);
    } catch (e) {
        return NextResponse.json({message: e instanceof Error ? e.message : String(e)});
    }
}