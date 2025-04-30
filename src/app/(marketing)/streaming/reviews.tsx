export const ReviewsPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulate a delay
    return (
        <div>
            <h1>Reviews Page</h1>
            <p>Review list here!</p>
        </div>
    );
}