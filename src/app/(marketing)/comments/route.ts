import comments from './data.json';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query') || null;
    
    const resultComments = query ? comments.filter(comment => comment.comment.toLowerCase().includes(query.toLowerCase())) : comments;

    return new Response(JSON.stringify(resultComments), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    
    const { author, comment } = await request.json();
    const newComment = {
        id: comments.length + 1,
        author,
        comment,
        date: new Date().toISOString(),
    };

    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
