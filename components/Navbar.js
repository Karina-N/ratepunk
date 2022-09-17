import styles from "./Navbar.module.scss";
import Link from "next/link";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img src="/images/Group 12.svg" alt="ratepunk logo" />
      </Link>
      <div className={styles.navbarLinks}>
        <Link href="/">Chrome Extension</Link>
        <Link href="/">Price Comparison</Link>
        <Link href="/">Blog</Link>
      </div>
    </div>
  );
}
