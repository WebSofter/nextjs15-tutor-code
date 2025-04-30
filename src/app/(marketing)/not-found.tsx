"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
}