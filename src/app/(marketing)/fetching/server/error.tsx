"use client";

import { useEffect } from "react";

export default function ErrorPage({error, reset}: {error: Error; reset: () => void}) {
    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
            <div className="bg-white p-8 rounded shadow-md flex flex-col items-center">
                <svg
                    className="w-16 h-16 text-red-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path stroke="currentColor" strokeWidth="2" d="M12 8v4m0 4h.01" />
                </svg>
                <h1 className="text-2xl font-bold text-red-600 mb-2">Что-то пошло не так</h1>
                <p className="text-gray-700 mb-4">Пожалуйста, попробуйте обновить страницу или вернуться позже.</p>
                <button
                    onClick={() => reset()}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                    Попробовать снова
                </button>
            </div>
        </div>
    );
}