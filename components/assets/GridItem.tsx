import React, { useState } from "react";
import styles from "../../style/modules/assets/GridItem.module.scss";
import Image from "next/image";
import Fade from "./Fade";
import Link from "next/link";

const GridItem = (props) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <>
      <Fade>
        <div className={styles.gridItem}>
          <h2 className="text-color">{props.title}</h2>
          {props.date && <p>{props.date}</p>}
          {props.auth && (
            <div className={`flexCol ${styles.flex} ${styles.pb} ${styles.pt}`}>
              <Image
                className="rounded"
                src="/profile.jpg"
                alt="me"
                width="64"
                height="64"
              />
              <p className={`text-color ${styles.color}`}>
                <Link href={props.authHref}>
                  <a>{props.auth}</a>
                </Link>
              </p>
            </div>
          )}
          <p>{props.desc}</p>
          {props.btn && (
            <button className={`darkButton ${styles.hover}`}>
              <Link href={props.btnHref}>
                <a>{props.btn}</a>
              </Link>
            </button>
          )}

          {props.open && (
            <>
              <p
                className={`${styles.transition} ${isOpen ? "" : styles.none}`}
              >
                {props.open}
              </p>
              <button onClick={toggle} className={`darkButton ${styles.hover}`}>
                {isOpen ? "Close" : "Read more"}
              </button>
            </>
          )}
          {props.children}
        </div>
      </Fade>
    </>
  );
};

export default GridItem;
