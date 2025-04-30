"use client"

import { editProduct, FormState } from "@/actions/products";
import { useActionState } from "react";
import { Product } from "@/app/(marketing)/database/page";

export default function EditProductForm({product}: {product: Product}) {

  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Добавить продукт
        </h1>
        <form action={formAction} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Название:
            </label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
            />
          </div>
          {state.errors.name && (
            <div className="text-red-500 text-sm mb-2">{state.errors.name}</div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Цена:
            </label>
            <input
              type="number"
              name="price"
              defaultValue={product.price}
              min={0}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
            />
          </div>
          {state.errors.price && (
            <div className="text-red-500 text-sm mb-2">
              {state.errors.price}
            </div>
          )}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Описание:
            </label>
            <textarea
              name="description"
              defaultValue={product.description || ""}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 resize-none"
              rows={4}
            />
          </div>
          {state.errors.description && (
            <div className="text-red-500 text-sm mb-2">
              {state.errors.description}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            disabled={isPending} // Disable the button if the form is pending
          >
            Обновить продукт
          </button>
        </form>
      </div>
    </div>
  );
}
