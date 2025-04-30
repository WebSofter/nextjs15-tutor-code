"use client"

import { useActionState } from "react";
import { FormState, addProduct } from "@/actions/products";


export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    addProduct,
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
            Добавить продукт
          </button>
        </form>
      </div>
    </div>
  );
}
