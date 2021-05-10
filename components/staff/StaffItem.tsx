import React, { useState } from "react";
import styles from "../../style/modules/staff/StaffItem.module.scss";
import Image from "next/image";
import Fade from "../assets/Fade";

const GridItem = (props) => {
  return (
    <>
      <Fade>
        <div className={styles.item}>
          <img
            className={`rounded ${styles.img}`}
            src={props.imgSrc}
            alt={props.imgDesc}
            width="150"
            height="150"
          />
          <h2>{props.name}</h2>
          <p>
            <i>{props.work}</i>
          </p>
          <p>{props.desc}</p>
          <button className={`darkButton ${styles.btn}`}>Read more</button>
        </div>
      </Fade>
    </>
  );
};

export default GridItem;
