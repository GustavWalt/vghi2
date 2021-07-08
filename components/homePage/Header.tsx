import React from "react";
import styles from "../../style/modules/homePage/Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.headerBg}>
        <h1 className={styles.headerh1}>VGHI</h1>
        <p>
          <i>Varför går hon inte?</i>
        </p>
        <h2>Varför går hon inte?</h2>
        <span />
        <div className={`flex ${styles.flex}`}>
          <Link href="/shop">
            <a className={`${styles.width} darkButton`}>
              <p>BESTÄLL</p>
            </a>
          </Link>
          <Link href="/information">
            <a className={`${styles.width} darkButton`}>
              <p>INFO</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
