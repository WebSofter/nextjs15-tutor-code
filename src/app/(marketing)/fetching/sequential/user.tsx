type User = {
    id: number;
    name: string;
    email: string;
};

// Функция для получения пользователей
async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
}

export default async function User({userId}: {userId: number}) {
    // Затем загружаем пользователя
    const user: User = await fetchUser(userId);

    return (<b>{user.name}</b>);
}