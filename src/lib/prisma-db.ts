'use server';

import { Prisma, PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// Seed products (bulk create)
export const seedProducts = async () => {
  const products = await prisma.product.findMany();
  if (products.length > 0) return; // Skip seeding if products already exist
  await prisma.product.createMany({ data: [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 200,
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 300,
    },
  ]});
}

await seedProducts() // Call the seed function to ensure products are seeded

// Create a new product
export async function createProduct(data: Prisma.ProductCreateInput) {
  return prisma.product.create({ data });
}

// Get product by ID
export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: { id },
  });
}

// Get all products
export async function getAllProducts(query?: string) {
  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, } },
          { description: { contains: query, } },
        ],
      },
    });
  }
  return prisma.product.findMany();
}

// Update product by ID
export async function updateProduct(id: number, data: Prisma.ProductUncheckedUpdateInput) {
  return prisma.product.update({
    where: { id },
    data,
  });
}

// Delete product by ID
export async function deleteProduct(id: number) {
  return prisma.product.delete({
    where: { id },
  });
}
