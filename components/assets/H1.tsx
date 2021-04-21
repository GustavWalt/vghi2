import React from "react";
import styles from "../../style/modules/h1/H1.module.scss";

const Bar = (props) => {
  return (
    <>
      <h1 className={styles.h1}>{props.title}</h1>
      <span className={styles.span} />
    </>
  );
};

export default Bar;
