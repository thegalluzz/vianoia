import Link from "next/link";
import styles from "../styles/Home.module.css";
import Home from "../pages";

export default function Navbar() {
    return (
        <nav className={styles.nav} >
            <Link href="/" >Home</Link>
        </nav>
    )
}