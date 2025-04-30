"use client";

import { clientSideFunction } from "../utils/client-util";

import { useTheme } from "@/providers/theme-provider";

export default function ClientSidePage() {
    const theme = useTheme();
    const result = clientSideFunction();
    return (
        <div>
            <h1>Welcome to the Client-Side Page [{result}]</h1>
            <p>This is a simple client-side rendered page in Next.js.</p>
            <p>Theme colors: {theme.colors.primary}, {theme.colors.secondary}</p>
        </div>
    );
}