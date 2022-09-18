import styles from "./Navbar.module.scss";
import Link from "next/link";
import Section from "./Section";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <Section>
        <div className={styles.navbarDiv}>
          <Link href="/">
            <img src="/images/Group 12.svg" alt="ratepunk logo" />
          </Link>

          <div className={styles.navbarLinks}>
            <Link href="/">Chrome Extension</Link>
            <Link href="/">Price Comparison</Link>
            <Link href="/">Blog</Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={[
              styles.hamburger,
              styles["hamburger--slider"],
              menuOpen ? styles["is-active"] : "",
            ].join(" ")}
            type="button"
          >
            <span className={styles["hamburger-box"]}>
              <span className={styles["hamburger-inner"]}></span>
            </span>
          </button>
        </div>
      </Section>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/">Chrome Extension</Link>
          <Link href="/">Price Comparison</Link>
          <Link href="/">Blog</Link>
        </div>
      )}
    </div>
  );
}
