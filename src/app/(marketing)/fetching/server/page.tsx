type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function ServerFetchingPage(){
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    
    return (
        <div>
            <h1>Fetching Page</h1>
            <p>This is the fetching page under the marketing route.</p>
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>} */}
            {users.length > 0 && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};