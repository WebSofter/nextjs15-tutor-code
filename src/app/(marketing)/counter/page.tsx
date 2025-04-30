import Counter from './counter';

// src/app/(marketing)/counter/page.tsx


export const metadata = {
    title: 'Counter Page',
    description: 'A simple counter page for demonstration purposes.',
};

export default function CounterPage() {
    return (
        <div>
            <h1>Counter Page</h1>
            <Counter />
        </div>
    );
}