import { Suspense } from "react";
import User from "./user"; // Импортируем компонент пользователя

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

// Функция для получения постов
async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
}

export default async function SequentialFetchingPostsPage() {
    // Сначала загружаем посты
    const posts = await fetchPosts();
    const filteredPosts = posts.filter((post: Post) => post.id % 10 === 1); // Фильтруем посты по userId
    return (
        <main>
            <h1>Последовательная подгрузка данных</h1>
            <section>
                <h2>Посты</h2>
                <ul>
                    {filteredPosts.map((post: Post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                            <p>Автор: 
                                <Suspense fallback={<b>Loading...</b>}>
                                    <User userId={post.userId}/>
                                </Suspense>
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}