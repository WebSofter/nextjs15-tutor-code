import { notFound } from "next/navigation";

export default async function ReviewPage({ params, } : { params: Promise<{ postId: string, reviewId: string }>}) {
    const { postId, reviewId } = await params;
    
    if(parseInt(reviewId)  >= 100) {
        return notFound()
    }

    return (
        <div>
            <h1>ReviewPage postId={postId}, reviewId={reviewId}</h1>
            <p>Welcome to the About page! Learn more about our mission and values.</p>
        </div>
    );
}