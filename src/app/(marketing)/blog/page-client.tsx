"use client"

import { use } from "react";

export default function BlogPage({searchParams, }: {
    searchParams: Promise<{ filter?: "date" | "rating" }>
}) {
    const { filter = "date", } = use(searchParams)
    return (
        <div>
            <h1>Blog filter={filter} </h1>
            <p>Welcome to the About page! Learn more about our mission and values.</p>
        </div>
    );
}