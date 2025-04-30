"use client"

import { useFormStatus } from "react-dom"; 

const Submit = () => {
    const { pending } = useFormStatus(); // Check if the form is pending
    return (
        <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        disabled={pending} // Disable the button if the form is pending
    >
        Добавить продукт
    </button>
    );
};

export default Submit;