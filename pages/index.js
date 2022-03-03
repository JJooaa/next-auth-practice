import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function Home() {
    const { data: session } = useSession();
    console.log(session);

    return (
        <>
            <Layout></Layout>
        </>
    );
}
