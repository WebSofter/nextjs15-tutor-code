export const dynamic = 'force-static'; // Force dynamic rendering for this route
export const revalidate = 5; // Revalidation for this route

export async function GET(){
    return Response.json({ time: new Date().toLocaleTimeString() }, { status: 200 })
}