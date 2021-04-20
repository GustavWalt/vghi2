import React, { useState, useEffect } from "react";
import styles from "../style/modules/navbar/Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      <nav className={styles.topNav}>
        <div className={styles.flex}>
          <li className={styles.logo}>
            <a className={styles.link} href="#">
              RSBoosts 🚀
            </a>
          </li>
          <div onClick={toggle} className={styles.menuToggle}>
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </div>
        </div>
        <ul
          className={`${styles.menu} ${
            isOpen ? styles.openMenu : styles.hidden
          }`}
        >
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Skilling
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Bossing
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Questing
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Blog
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
