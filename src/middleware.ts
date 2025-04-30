// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

/**
 * For clerk authentication, you can use the middleware provided by Clerk.
 * This middleware will handle authentication and session management for you.
 */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(['/user-profile'])
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
    // Check if the user is authenticated
    const { userId, redirectToSignIn } = await auth();

    if (!userId && !isPublicRoute(req)) {
        return redirectToSignIn();
    }

    // if (!isPublicRoute(req)) await auth.protect()

    // if (isProtectedRoute(req)) await auth.protect()

    // Check if the user is authenticated for protected routes
    // if (isProtectedRoute(req)) {
    //     if (!auth.userId) {
    //         return NextResponse.redirect('/sign-in');
    //     }
    // }

    // Allow the request to proceed
    // return NextResponse.next();
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};

/**
 * 
 * @param request - The incoming request object
 * @returns 
 */
/*
export function middleware(request: NextRequest) {
    //Method 1: Using NextRequest to access request properties

    // Example: Log the requested URL
    console.log(`Request URL: ${request.url}`);

    // Example: Redirect to another page
    if (request.nextUrl.pathname === '/blog') {
        return NextResponse.redirect(new URL('/categories', request.url));
        // return NextResponse.rewrite(new URL('/categories', request.url));
    }

    // Allow the request to proceed
    const response = NextResponse.next();

    // Change headers example
    response.headers.set('X-Custom-Header', 'My Custom Value');
    // Change Cookies example
    const themeCookie = request.cookies.get('theme');
    if (!themeCookie) {
        response.cookies.set('theme', 'dark');
    }
    return response;
    // Method 2: Using NextResponse to handle responses
    // return NextResponse.redirect(new URL('/categories', request.url));
}
*/

/**
 * Method 2: Using NextResponse to handle responses
 */
// Specify the paths where the middleware should run
// export const config = {
//     matcher: ['/blog'], // Add paths or patterns here
// };