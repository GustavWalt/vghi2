import React from "react";
import styles from "../../style/modules/grid/GridItem.module.scss";
import Image from "next/image";
import Fade from "./Fade";

const GridItem = (props) => {
  return (
    <>
      <Fade>
        <div className={styles.gridItem}>
          <h2 className="text-color">{props.title}</h2>
          {props.date && <p>{props.date}</p>}
          {props.auth && (
            <div className={`flex ${styles.flex} ${styles.pb} ${styles.pt}`}>
              <Image
                className="rounded"
                src="/profile.jpg"
                alt="me"
                width="64"
                height="64"
              />
              <p className="text-color">
                <a href={props.authHref}>{props.auth}</a>
              </p>
            </div>
          )}
          <p>{props.desc}</p>
          <button className="darkButton">
            <a href={props.btnHref}>{props.btn}</a>
          </button>
        </div>
      </Fade>
    </>
  );
};

export default GridItem;
