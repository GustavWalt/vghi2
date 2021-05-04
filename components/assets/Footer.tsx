import React from "react";
import styles from "../../style/modules/footer/Footer.module.scss";
import Fade from "./Fade";

const About = () => {
  return (
    <div className={styles.footer}>
      <div className="flex">
        <div className={styles.footerItem}>
          <h1>INFORMATION</h1>
          <p>Home</p>
          <p>Contact us</p>
        </div>
        <div className={styles.footerItem}>
          <h1>CATEGORIES</h1>
          <p>Home</p>
          <p>Skilling services</p>
          <p>Bossing services</p>
          <p>Questing services</p>
          <p>Blog</p>
          <p>Staff</p>
          <p>Support</p>
        </div>
        <div className={styles.footerItem}>
          <h1>LEGAL‎‎‎‎‎‎‎</h1>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Refund Policy</p>
          <p>In-game Policy</p>
        </div>
      </div>
      <div className={styles.blueBg}>
        <p>Copyright 2021 RSBoosts</p>
      </div>
    </div>
  );
};

export default About;
