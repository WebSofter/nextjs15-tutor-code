import { NextRequest } from "next/server" // Method 1
import { headers, cookies } from "next/headers" // Method 2
import { redirect } from "next/navigation"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const redirectParam = searchParams.get('redirect') || null;
    if (redirectParam?.includes("true")) {
        redirect("https://www.google.com/");
    }
    // redirect("/api/v2/profile");

    // Method 1: Using NextRequest to get headers
    const requestHeaders = new Headers(request.headers);
    console.log("Request Headers (User-Agent):", requestHeaders.get("User-Agent"));
    console.log("Request Headers (Accept):", requestHeaders.get("Accept"));
    console.log("Request Headers (Authorization):", requestHeaders.get("Authorization"));

    // Method 2: Using headers() to get headers
    const headersList = await headers();
    console.log("Request Headers (User-Agent):", headersList.get("User-Agent"));
    console.log("Request Headers (Accept):", headersList.get("Accept"));
    console.log("Request Headers (Authorization):", headersList.get("Authorization"));

    // return Response.json({
    //     message: "Hello from the server!",
    //     headers: {
    //         "User-Agent": requestHeaders.get("User-Agent"),
    //         Accept: requestHeaders.get("Accept"),
    //         Authorization: requestHeaders.get("Authorization"),
    //     },
    // });

    // Method 1: Using NextRequest to get cookies
    const cookie1 = request.headers.get("cookie");
    console.log("Cookie 1:", cookie1); // Cookie 1: sessionId=abc123; theme=light

    // Method 2: Using cookies property to get cookies
    const cookie2 = request.cookies.get("theme");
    console.log("Cookie 2:", cookie2); // Cookie 2: { name: 'theme', value: 'light' }

    // Method 3: Using cookies() to set cookies
    const cookie3 = await cookies();
    cookie3.set("theme3", "light");
    console.log("Cookie 3:", cookie3.get("theme3")); // Cookie 3: { name: 'theme', value: 'light' }

    return new Response("<h1>Hello from the server!</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=light",
        },
        status: 200,
    });
}