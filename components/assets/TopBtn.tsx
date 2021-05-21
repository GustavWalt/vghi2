import React from "react";
import styles from "../../style/modules/assets/TopBtn.module.scss";

const TopBtn = () => {
  const backTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button className={styles.scrollTop} onClick={backTop}>
        &#8593;
      </button>
    </>
  );
};

export default TopBtn;
