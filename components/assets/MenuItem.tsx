import React from "react";
import styles from "../../style/modules/assets/Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const MenuItem = (props) => {
  const router = useRouter();

  return (
    <>
      <li
        className={`${styles.item} ${
          router.pathname == props.href ? "active" : ""
        }`}
      >
        <Link href={props.href}>
          <a className={styles.link}>{props.title}</a>
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
