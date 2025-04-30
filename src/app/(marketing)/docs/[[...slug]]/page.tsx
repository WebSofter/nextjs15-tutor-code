export default async function DocPage({ params, } : { params: Promise<{ slug: string[] }>}) {
    const slug = (await params).slug
    // console.log(slug)
    return (
        <div>
            <h1>DocPage {slug}</h1>
            <p>Welcome to the About page! Learn more about our mission and values.</p>
        </div>
    );
}