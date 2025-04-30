import { getAllProducts } from "@/lib/prisma-db";
import { ProductDetail } from "./product-detail";

export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};


export default async function DatabasePage({searchParams}: {searchParams: Promise<{query: string}>}) {
    const { query } = await searchParams;
    const products: Product[] = await getAllProducts(query)
    return <ProductDetail products={products} />
}