"use client"
import { useRouter } from "next/navigation"
import { startTransition } from "react"
export default function ErrorPage({error, reset}: {error: Error, reset: ()=> void}) {

    const router = useRouter()
    const reload = () => {
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }

    return <>
    <i>{error.message}</i>
    <button onClick={()=> reload()}>Retry</button>
    </>
}