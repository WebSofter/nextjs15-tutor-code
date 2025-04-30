export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type Album = {
    userId: number;
    id: number;
    title: string;
};

async function getUserPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
}

async function getuserAlbums(userId: number): Promise<Album[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch albums");
    return response.json();
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log("userId", id);
    const [posts, albums] = await Promise.all([getUserPosts(Number(id)), getuserAlbums(Number(id))]);

    return (
        <div>
            <h1>User {id}</h1>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <h2>Albums</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
}