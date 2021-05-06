import React from "react";
import styles from "../../style/modules/footer/Footer.module.scss";
import Fade from "./Fade";

const About = () => {
  return (
    <div className={styles.footer}>
      <div className="flex">
        <div className={styles.footerItem}>
          <h1>INFORMATION</h1>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/support">Contact us</a>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>CATEGORIES</h1>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/skilling">Skilling services</a>
          </p>
          <p>
            <a href="/bossing">Bossing services</a>
          </p>
          <p>
            <a href="/questing">Questing services</a>
          </p>
          <p>
            <a href="/blog">Blog</a>
          </p>
          <p>
            <a href="/staff">Staff</a>
          </p>
          <p>
            <a href="/support">Support</a>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>LEGAL‎‎‎‎‎‎‎</h1>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms of Service</a>
          </p>
          <p>
            <a href="#">Refund Policy</a>
          </p>
          <p>
            <a href="#">In-game Policy</a>
          </p>
        </div>
      </div>
      <div className={styles.blueBg}>
        <p>© Copyright 2021 RSBoosts ©</p>
      </div>
    </div>
  );
};

export default About;
