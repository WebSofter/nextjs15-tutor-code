export default async function BlogPage({searchParams, }: {
    searchParams: Promise<{ filter?: "date" | "rating" }>
}) {
    const { filter = "date", } = await searchParams

    await new Promise(resolve => {
        setTimeout(() => {
            resolve("Delay for loading...")
        }, 2000);
    })

    return (
        <div>
            <h1>Blog filter={filter} </h1>
            <p>Welcome to the About page! Learn more about our mission and values.</p>
        </div>
    );
}