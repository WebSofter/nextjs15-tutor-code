import { Metadata } from "next";

type Props = {
    params: Promise<{postId: string, }>,
}

const randomVal = (count: number) => {
    return Math.floor(Math.random() * count)
}

export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
    if (randomVal(3) === 1) {
        throw new Error('Some error!')
    }
    const postId = (await params).postId
    const title = await new Promise(resolve => {
        setTimeout(()=>{
            resolve(`iPhone ${postId}`)
        }, 1000)
    });

    return {
        title: `Post: ${title}`
    }
}

export default async function PostgPage({ params, } : { params: Promise<{ postId: string }>}) {
    const postId = (await params).postId
    return (
        <div>
            <h1>PostPage {postId}</h1>
            <p>Welcome to the About page! Learn more about our mission and values.</p>
        </div>
    );
}