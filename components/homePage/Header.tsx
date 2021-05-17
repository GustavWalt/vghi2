import React from "react";
import styles from "../../style/modules/homePage/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1 className={styles.headerh1}>RSBoosts</h1>
        <h1 className={`${styles.displayNone} text-center`}>Services</h1>
        <h2>SKILLING, BOSSING, & QUESTING SERVICES</h2>
        <span />
        <div className={`flex ${styles.flex}`}>
          <Link href="/skilling">
            <a className={`${styles.width} darkButton`}>
              <p>Skilling</p>
            </a>
          </Link>
          <Link href="/bossing">
            <a className={`${styles.width} darkButton`}>
              <p>Bossing</p>
            </a>
          </Link>
          <Link href="/questing">
            <a className={`${styles.width} darkButton`}>
              <p>Questing</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
