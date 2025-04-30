import { serverSideFunction } from "../utils/server-util";

export default function ServerSidePage() {
    const result = serverSideFunction();
    return (
        <div>
            <h1>Welcome to the Server-Side Page [{result}]</h1>
            <p>This is a simple server-side rendered page in Next.js.</p>
        </div>
    );
}