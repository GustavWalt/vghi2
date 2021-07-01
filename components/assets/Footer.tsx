import React from "react";
import styles from "../../style/modules/assets/Footer.module.scss";
import Fade from "./Fade";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.footer}>
      <div className="flex">
        <div className={styles.footerItem}>
          <h1>INFORMATION</h1>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/support">
              <a>Contact us</a>
            </Link>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>CATEGORIES</h1>
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/skilling">
              <a>Skilling services</a>
            </Link>
          </p>
          <p>
            <Link href="/bossing">
              <a>Bossing services</a>
            </Link>
          </p>
          <p>
            <Link href="/questing">
              <a>Questing services</a>
            </Link>
          </p>
          <p>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </p>
          <p>
            <Link href="/staff">
              <a>Staff</a>
            </Link>
          </p>
          <p>
            <Link href="/support">
              <a>Support</a>
            </Link>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>LEGAL‎‎‎‎‎‎‎</h1>
          <p>
            <Link href="/gdpr">
              <a>Privacy Policy</a>
            </Link>
          </p>
          <p>
            <Link href="/gdpr">
              <a>Terms of Service</a>
            </Link>
          </p>
          <p>
            <Link href="/gdpr">
              <a>Refund Policy</a>
            </Link>
          </p>
          <p>
            <Link href="/gdpr">
              <a>In-game Policy</a>
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.blueBg}>
        <p>Copyright 2021 Gustav Walter ©</p>
      </div>
    </div>
  );
};

export default About;
