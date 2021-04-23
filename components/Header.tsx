import React from "react";
import styles from "../style/modules/header/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1 className={styles.headerh1}>RSBoosts</h1>
        <h1 className={`${styles.displayNone} text-center`}>Services</h1>
        <h2>SKILLING, BOSSING, & QUESTING SERVICES</h2>
        <span />
        <div className={`flex ${styles.flex}`}>
          <button className={`${styles.width} lightButton`}>Skilling</button>
          <button className={`${styles.width} lightButton`}>Bossing</button>
          <button className={`${styles.width} lightButton`}>Questing</button>
        </div>
      </div>
    </>
  );
};

export default Header;
