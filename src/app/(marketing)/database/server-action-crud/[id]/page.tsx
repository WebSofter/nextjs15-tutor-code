import { getProductById } from "@/lib/prisma-db";
import EditProductForm from "./product-edit-form";
import { Product } from "@/app/(marketing)/database/page";
import { notFound } from "next/navigation";

export default async function EditProductPage({params}: {params: Promise<{id: string}>}) {
  const { id } = await params;
  const product: Product | null = await getProductById(parseInt(id)); // Fetch the product by ID
  if (!product) {
    notFound(); // Handle the case where the product is not found
  }
  return (
    <EditProductForm product={product}/>
  );
}
