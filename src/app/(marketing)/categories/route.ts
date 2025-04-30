export const dynamic = 'force-dynamic'; // Force dynamic rendering for this route
export const revalidate = 0; // Disable revalidation for this route

export async function GET() {
    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
        { id: 4, name: 'Category 4' },
    ];

    return new Response(JSON.stringify(categories), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}