import React, { useState, useEffect } from "react";
import styles from "../../style/modules/assets/Navbar.module.scss";
import Link from "next/link";

//Importing assets
import Bar from "./Bar";
import MenuItem from "./MenuItem";
import Cart from "./Cart";
import useWindowDimensions from "../assets/hooks/useWindowDimensions";

const Navbar = (props) => {
  if (typeof window !== "undefined") {
    var { width } = useWindowDimensions();
  }

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
              <a className={styles.link}>VGHI</a>
            </Link>
          </div>
          <div className="permFlex">
            <Cart className="deskNone" />
            <div onClick={toggle} className={styles.menuToggle}>
              <Bar className="bar1" />
              <Bar className="bar2" />
              <Bar className="bar3" />
            </div>
          </div>
        </div>
        <ul
          className={`${styles.menu} ${
            isOpen ? styles.openMenu : styles.hidden
          }`}
        >
          <MenuItem href="/" title="Hem" />
          <MenuItem href="/information" title="Information" />
          <MenuItem href="/kunder" title="Urval av kunder" />
          <MenuItem href="/shop" title="Beställ böcker" />
          <MenuItem href="/kontakt" title="Kontakt" />
          {width >= 1310 && <Cart />}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
