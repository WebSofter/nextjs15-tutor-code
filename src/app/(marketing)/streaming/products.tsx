export const ProductsPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    return (
        <div>
            <h1>Products Page</h1>
            <p>Product list here!</p>
        </div>
    );
}