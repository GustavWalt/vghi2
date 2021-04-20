import React from "react";
import styles from "../../style/modules/navbar/Navbar.module.scss";

const Bar = (props) => {
  return (
    <>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          {props.title}
        </a>
      </li>
    </>
  );
};

export default Bar;
