import { useSession, signOut, signIn } from "next-auth/react";
import styles from "./layout.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Layout({ children }) {
    const { data: session } = useSession();

    return (
        <>
            <div className={styles.nav}>
                <h3>Logo</h3>
                {session && (
                    <>
                        <div
                            style={{
                                display: "flex",
                                width: 300,
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Link href="/home">
                                <a>Home</a>
                            </Link>
                            <Link href="/home">
                                <a>Posts</a>
                            </Link>
                            <Link href="/home">
                                <a>Users</a>
                            </Link>
                            <Link href="/home">
                                <a>Albums</a>
                            </Link>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: 200,
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography color="black">
                                {session.user.name}
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => signOut()}
                            >
                                Log Out
                            </Button>
                        </div>
                    </>
                )}
                {!session && (
                    <>
                        <Button
                            variant="contained"
                            onClick={() => signIn("github")}
                        >
                            Login
                        </Button>
                    </>
                )}
            </div>

            <main className={styles.main}>{children}</main>
        </>
    );
}
