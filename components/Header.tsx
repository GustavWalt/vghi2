import React from "react";
import styles from "../style/modules/header/Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1>RSBoosts</h1>
        <h1 className={styles.displayNone}>Services</h1>
        <h2>SKILLING, BOSSING, & QUESTING SERVICES</h2>
        <span />
        <div className={styles.flex}>
          <button>Skilling</button>
          <button>Bossing</button>
          <button>Questing</button>
        </div>
      </div>
    </>
  );
};

export default Header;
