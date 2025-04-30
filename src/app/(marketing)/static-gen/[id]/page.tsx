export const dynamicParams = false; // Disable dynamic params for this route

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];
}

export default async function StaticGenDetailPage({params, }: {params: Promise<{id: string}>}) {
    const { id } = await params;
    return <h1>Static Gen Detail Page {id}</h1>;

}