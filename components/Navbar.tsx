import React, { useState, useEffect } from "react";
import styles from "../style/modules/navbar/Navbar.module.scss";

//Importing assets
import Bar from "./assets/Bar";
import MenuItem from "./assets/MenuItem";

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
            <Bar />
            <Bar />
            <Bar />
          </div>
        </div>
        <ul
          className={`${styles.menu} ${
            isOpen ? styles.openMenu : styles.hidden
          }`}
        >
          <MenuItem title="Home" />
          <MenuItem title="Skilling" />
          <MenuItem title="Bossing" />
          <MenuItem title="Questing" />
          <MenuItem title="Blog" />
          <MenuItem title="Staff" />
          <MenuItem title="Support" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
