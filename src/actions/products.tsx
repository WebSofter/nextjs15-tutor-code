"use server";

import { createProduct, deleteProduct, updateProduct } from "@/lib/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  name?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export async function addProduct(prevStaet: FormState, formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;

  // Обработка ошибок
  const errors: Errors = {};
  if (!name) errors.name = "Название продукта обязательно.";
  if (!price || isNaN(price) || price <= 0)
    errors.price = "Цена должна быть положительным числом.";
  if (!description) errors.description = "Описание продукта обязательно.";

  if (Object.keys(errors).length > 0) {
    return { errors }; // Если есть ошибки, вернем их в состояние
  }
  // Добавление продукта
  await createProduct({ name, price: Number(price), description });
  redirect("/database"); // Redirect to the products page after adding the product
}

export async function editProduct(id: number, prevStaet: FormState, formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const price = parseFloat(formData.get("price") as string);
  const description = formData.get("description") as string;

  // Обработка ошибок
  const errors: Errors = {};
  if (!name) errors.name = "Название продукта обязательно.";
  if (!price || isNaN(price) || price <= 0)
    errors.price = "Цена должна быть положительным числом.";
  if (!description) errors.description = "Описание продукта обязательно.";

  if (Object.keys(errors).length > 0) {
    return { errors }; // Если есть ошибки, вернем их в состояние
  }
  // Добавление продукта
  await updateProduct(id, { name, price: Number(price), description });
  redirect("/database"); // Redirect to the products page after adding the product
}

export async function removeProduct(id: number) {
  "use server";

  await deleteProduct(id);
  revalidatePath("/database"); // Redirect to the products page after adding the product
}