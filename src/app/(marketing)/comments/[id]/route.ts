import comments from '../data.json';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === Number(id));
    return new Response(JSON.stringify(comment), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string, }> }) {
    const { id, } = await params;
    const { comment: text } = await request.json();
    const index = comments.findIndex((comment) => comment.id === Number(id));
    comments[index].comment = text;

    return new Response(JSON.stringify(comments[index]), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string, }> }) {
    const { id, } = await params;
    const index = comments.findIndex((comment) => comment.id === Number(id));
    const removedComment = comments.splice(index, 1);
    if (removedComment) {
        
        return new Response(JSON.stringify(comments[index]), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        return new Response(JSON.stringify({ message: 'Comment not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}