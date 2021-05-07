import React from "react";
import styles from "../../style/modules/assets/H1.module.scss";
import Fade from "./Fade";

const Bar = (props) => {
  return (
    <Fade>
      <h1 className={styles.h1}>{props.title}</h1>
      <span className={styles.span} />
    </Fade>
  );
};

export default Bar;
