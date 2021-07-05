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
              <a>Hem</a>
            </Link>
          </p>
          <p>
            <Link href="/kontakt">
              <a>Kontakta mig</a>
            </Link>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>KATEGORIER</h1>
          <p>
            <Link href="/">
              <a>Hem</a>
            </Link>
          </p>
          <p>
            <Link href="/information">
              <a>Information</a>
            </Link>
          </p>
          <p>
            <Link href="/kunder">
              <a>Kunder</a>
            </Link>
          </p>
          <p>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
          </p>
          <p>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </p>
        </div>
        <div className={styles.footerItem}>
          <h1>KUNDSERVICE</h1>
          <p>
            <Link href="">
              <a>Kontakt</a>
            </Link>
          </p>
          <p>
            <Link href="">
              <a>Köpvillkor</a>
            </Link>
          </p>
          <p>
            <Link href="">
              <a>Behandling av personuppgifter</a>
            </Link>
          </p>
          <p>
            <Link href="">
              <a>Vanliga frågor & svar</a>
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
