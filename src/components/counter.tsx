"use client";

import React, { useState } from 'react';
import {useAuth, useUser} from "@clerk/nextjs";

export const Counter = () => {
    const [count, setCount] = useState(0);

    // const { isLoaded, sessionId, userId, getToken} = useAuth();
    // if (!isLoaded || !userId) {
    //     return null;
    // }

    const { isLoaded, isSignedIn, user} = useUser();
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div style={{
            maxWidth: '320px',
            margin: '24px auto',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h3 style={{marginBottom: '16px'}}>Counter</h3>
            <p style={{fontSize: '2rem', margin: '12px 0'}}>{count}</p>
            <div style={{display: 'flex', gap: '12px'}}>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;