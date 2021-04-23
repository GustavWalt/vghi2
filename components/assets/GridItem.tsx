import React from "react";
import styles from "../../style/modules/grid/GridItem.module.scss";
import Image from "next/image";

const GridItem = (props) => {
  return (
    <>
      <div className={styles.gridItem}>
        <h1 className="text-color">{props.title}</h1>
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
              <a href="#">{props.auth}</a>
            </p>
          </div>
        )}
        <p>{props.desc}</p>
        <button className="darkButton">{props.btn}</button>
      </div>
    </>
  );
};

export default GridItem;
