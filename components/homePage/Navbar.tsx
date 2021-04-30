import React, { useState, useEffect } from "react";
import styles from "../../style/modules/navbar/Navbar.module.scss";

//Importing assets
import Bar from "../assets/Bar";
import MenuItem from "../assets/MenuItem";

const Navbar = (props) => {
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
            <a className={styles.link} href="/">
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
          <MenuItem href="/" title="Home" />
          <MenuItem href="/skilling" title="Skilling" />
          <MenuItem href="/bossing" title="Bossing" />
          <MenuItem href="/questing" title="Questing" />
          <MenuItem href="/blog" title="Blog" />
          <MenuItem href="/staff" title="Staff" />
          <MenuItem href="/support" title="Support" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
