import React from "react";
import styles from "../../style/modules/homePage/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1 className={styles.headerh1}>VGHI</h1>
        <h2>Varför går hon inte?</h2>
        <span />
        <div className={`flex ${styles.flex}`}>
          <Link href="/skilling">
            <a className={`${styles.width} darkButton`}>
              <p>Information</p>
            </a>
          </Link>
          <Link href="/bossing">
            <a className={`${styles.width} darkButton`}>
              <p>Kunder</p>
            </a>
          </Link>
          <Link href="/questing">
            <a className={`${styles.width} darkButton`}>
              <p>Shop</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
