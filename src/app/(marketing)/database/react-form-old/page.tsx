'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Product {
    name: string;
    price: number;
    description: string;
}

export default function AddProductForm() {
    const router = useRouter(); // Import useRouter from 'next/router'
    const [product, setProduct] = useState<Product>({
        name: '',
        price: 0,
        description: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        try {
            const response =  await fetch('/database/react-form/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            if (response.ok) {
                router.push('/database'); // Redirect to the products page
                setSubmitted(true);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(true); // Set loading state to true
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Добавить продукт
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Название:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Цена:
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            min={0}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Описание:
                        </label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 resize-none"
                            rows={4}
                        />
                    </div>
                    <button
                        disabled={loading} // Disable button when loading
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        { (loading ? 'Идет добавление...' : 'Добавить') }
                    </button>
                </form>
                {submitted && (
                    <p className="mt-4 text-green-600 text-center font-medium">
                        Продукт успешно добавлен!
                    </p>
                )}
            </div>
        </div>
    );
}