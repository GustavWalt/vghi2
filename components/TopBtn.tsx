import React from "react";
import styles from "../style/modules/topbtn/TopBtn.module.scss";

const TopBtn = () => {
  const backTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button className={styles.scrollTop} onClick={backTop}>
        🡹
      </button>
    </>
  );
};

export default TopBtn;
