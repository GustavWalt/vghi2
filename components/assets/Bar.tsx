import React from "react";
import styles from "../../style/modules/assets/Navbar.module.scss";

const Bar = (props) => {
  return (
    <>
      <div className={styles[props.className]} />
    </>
  );
};

export default Bar;
