import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";

export default function Home() {
    const { data: session, status } = useSession();

    return (
        <div className={styles.container}>
            {!session && (
                <div>
                    Not signed in <br />
                    <Button
                        variant="contained"
                        onClick={() => signIn("github")}
                    >
                        Sign In
                    </Button>
                </div>
            )}
            {session && (
                <div>
                    Signed in as {session.user.email} <br />
                    <Button variant="contained" onClick={() => signOut()}>
                        Log Out
                    </Button>
                </div>
            )}
        </div>
    );
}
