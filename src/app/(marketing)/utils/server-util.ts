import "server-only";

export const serverSideFunction = () => {
    console.log("This is a server-side function.");

    return "Server-side data";
}