import React from "react";
import styles from "../../style/modules/header/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1 className={styles.headerh1}>RSBoosts</h1>
        <h1 className={`${styles.displayNone} text-center`}>Services</h1>
        <h2>SKILLING, BOSSING, & QUESTING SERVICES</h2>
        <span />
        <div className={`flex ${styles.flex}`}>
          <a className={`${styles.width} lightButton`} href="/skilling">
            <p>Skilling</p>
          </a>
          <a className={`${styles.width} lightButton`} href="/bossing">
            <p>Bossing</p>
          </a>
          <a className={`${styles.width} lightButton`} href="/questing">
            <p>Questing</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
