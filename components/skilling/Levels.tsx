import React from "react";
import styles from "../../style/modules/levels/Levels.module.scss";

import Fade from "../assets/Fade";

const Calculator = () => {
  return (
    <div className={styles.levels}>
      <Fade>
        <h2>Calculator</h2>
        <div className={styles.current}>
          <p>Current level</p>
          <button>🡰</button>
          <input type="text" defaultValue="1" />
          <button>🡲</button>
        </div>

        <div className={styles.target}>
          <p>Target level</p>
          <button>🡰</button>
          <input type="text" defaultValue="2" />
          <button>🡲</button>
        </div>

        <div className={styles.total}>
          <div className="flex">
            <p>Total xp:</p>
            <p>0</p>
          </div>
        </div>

        <div className={styles.price}>
          <div className="flex">
            <p>Total price:</p>
            <p>$0</p>
          </div>
        </div>

        <button className={styles.add}>ADD TO CART</button>
      </Fade>
    </div>
  );
};

export default Calculator;
