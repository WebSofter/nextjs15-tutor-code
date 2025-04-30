import { Suspense } from "react";
import { ProductsPage } from "./products";
import { ReviewsPage } from "./reviews";

export default function StreamingPage() {
    return (
        <div>
            <h1>Streaming Page</h1>
            <p>Welcome to the streaming section of our website!</p>
            <Suspense fallback={<div>Loading products...</div>}>
                <ProductsPage />
            </Suspense>
            <Suspense fallback={<div>Loading reviews...</div>}>
                <ReviewsPage />
            </Suspense>
        </div>
    );
}