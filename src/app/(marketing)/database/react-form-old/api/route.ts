import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { Product } from '@/generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const data: Product = await request.json();

        // Пример: ожидаем { name: string, price: number, description: string }
        const { name, price, description } = data;

        if (!name || typeof price !== 'number') {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        const product = await prisma.product.create({
            data: {
                name,
                price,
                description
            },
        });

        return NextResponse.json(product, { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error adding product:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}