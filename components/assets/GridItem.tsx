import React from "react";
import styles from "../../style/modules/grid/GridItem.module.scss";

const Bar = (props) => {
  return (
    <>
      <div className={styles.gridItem}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button className="darkButton">{props.btn}</button>
      </div>
    </>
  );
};

export default Bar;
