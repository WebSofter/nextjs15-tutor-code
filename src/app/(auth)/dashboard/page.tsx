import { Counter } from "@/components/counter";
import { auth, currentUser, User } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const authObject = await auth();
    const userObject: User | null = await currentUser();
    console.log({authObject, userObject});
    // if (!userId) {
    //     redirect("/sign-in");
    // }

    return (
        <main>
            <h1>Dashboard</h1>
            <Counter />
            <p>Welcome, user <b>{userObject && userObject.fullName}</b>!</p>
        </main>
    );
}