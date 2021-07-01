import React from "react";
import styles from "../../style/modules/assets/H2.module.scss";
import Fade from "./Fade";

const H2 = (props) => {
  return (
    <Fade>
      <h1 className={styles.h1}>{props.title}</h1>
    </Fade>
  );
};

export default H2;
