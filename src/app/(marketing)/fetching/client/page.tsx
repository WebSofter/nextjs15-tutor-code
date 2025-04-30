"use client"

import { useState, useEffect } from 'react';

type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const ClientFetchingPage = () => {
    // Fetching data from an API endpoint
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Fetching Page</h1>
            <p>This is the fetching page under the marketing route.</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
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

export default ClientFetchingPage;