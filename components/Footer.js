import styles from "./Footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerAbout}>
        <img src="/images/Group 12.svg" alt="" />
        <p>
          Ratepunk compares hotel room prices across the major online travel
          agencies. When you search for a room, Ratepunk extension scans the top
          booking sites and runs a price comparison, so you can be confident in
          knowing you're getting the best deal!
        </p>
      </div>
      <div className={styles.quickLinks}>
        <h4>Quick Links</h4>
        <Link href="/">Chrome Extension</Link>
        <Link href="/">Price Comparison</Link>
        <Link href="/">How It Works</Link>
        <Link href="/">Ratepunk Blog</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
      <div className={styles.contactAndSocial}>
        <div>
          <h4>Contact</h4>
          <div id={styles.emailLink}>
            <Link href={"mailto: hi@ratepunk.com"}>
              <>
                <span>
                  <img src="/images/Icon feather-mail.svg" alt="email icon" />
                </span>
                <p>hi@ratepunk.com</p>
              </>
            </Link>
          </div>
        </div>
        <div>
          <h4>Social</h4>
          <div id={styles.socialLinks}>
            <Link href="/">
              <img
                src="/images/Icon awesome-instagram.svg"
                alt="instagram icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/Icon awesome-facebook-f.svg"
                alt="facebook icon"
              />
            </Link>
            <Link href="/">
              <img
                src="/images/Icon awesome-linkedin-in.svg"
                alt="linkedin icon"
              />
            </Link>
            <Link href="/">
              <img src="/images/Icon awesome-twitter.svg" alt="twitter icon" />
            </Link>
            <Link href="/">
              <img src="/images/Icon simple-tiktok.svg" alt="tiktok icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
