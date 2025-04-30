"use client"
import { useRouter } from "next/navigation"

export default function OrderPage() {
    const router = useRouter();

    const handleOrder = ()=>{
        router.push("/")
    }
    
    return (
        <>
            <button onClick={handleOrder}>Place Order</button>
        </>
    )
}