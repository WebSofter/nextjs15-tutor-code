"use client";

import { removeProduct } from "@/actions/products";
import Link from "next/link";
import { useOptimistic } from "react";
import Form from "next/form"

export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
};


export const ProductDetail = ( {products}: {products: Product[]}) => {
    // const products: Product[] = await getAllProducts()
    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId)=>{
        return currentProducts.filter((product) => product.id !== productId)
    });

    const removeProductById = async (productId: number) => {
        setOptimisticProducts(productId);
        await removeProduct(productId);
    }

    return (
        <div>
            <h1>Database Page</h1>
            <p>This is the database page under the marketing route.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {optimisticProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow p-6 flex flex-col"
                    >
                        <h2 className="text-lg font-semibold mb-2">
                            <Link href={`/database/server-action-crud/${product.id}`}>{product.name}</Link>
                        </h2>
                        <p className="text-gray-600 mb-4">{product.description || "No description"}</p>
                        <div className="mt-auto">
                            <span className="text-xl font-bold text-blue-600">${product.price}</span>
                            {/* <form action={removeProduct.bind(null, product.id)} method="POST" className="mt-4"> */}
                            <Form action={removeProductById.bind(null, product.id)} className="mt-4">
                                <button type="submit" className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                                    Delete
                                </button>
                            </Form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}