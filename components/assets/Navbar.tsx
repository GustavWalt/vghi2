import React, { useState, useEffect } from "react";
import styles from "../../style/modules/assets/Navbar.module.scss";
import Link from "next/link";

//Importing assets
import Bar from "./Bar";
import MenuItem from "./MenuItem";
import Cart from "./Cart";

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
          <div className={styles.logo}>
            <Link href="/">
              <a className={styles.link}>RSBoosts 🚀</a>
            </Link>
          </div>
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
          <Cart />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
