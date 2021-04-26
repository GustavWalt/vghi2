import React from "react";
import styles from "../../style/modules/navbar/Navbar.module.scss";
import { useRouter } from "next/router";

const MenuItem = (props) => {
  const router = useRouter();

  return (
    <>
      <li
        className={`${styles.item} ${
          router.pathname == props.href ? "active" : ""
        }`}
      >
        <a className={styles.link} href={props.href}>
          {props.title}
        </a>
      </li>
    </>
  );
};

export default MenuItem;
