import Submit from '@/components/submit';
import { createProduct } from '@/lib/prisma-db'
import { redirect } from 'next/navigation';

export default function AddProductForm() {
    async function addProduct(formData: FormData) {
        "use server";
        const name = formData.get('name') as string;
        const price = parseFloat(formData.get('price') as string);
        const description = formData.get('description') as string;
        
        await createProduct({ name, price: Number(price), description });
        redirect('/database'); // Redirect to the products page after adding the product
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Добавить продукт
                </h1>
                <form action={addProduct} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Название:
                        </label>
                        <input
                            type="text"
                            name="name"
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
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 resize-none"
                            rows={4}
                        />
                    </div>
                    {/* <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                        Добавить продукт
                    </button> */}
                    <Submit/>
                </form>
            </div>
        </div>
    );
}