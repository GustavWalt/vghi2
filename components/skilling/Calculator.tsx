import React from "react";
import styles from "../../style/modules/skilling/Calculator.module.scss";

//Assets components
import H1 from "../assets/H1";
import Fade from "../assets/Fade";

//Components
import Cart from "./Cart";
import Levels from "./Levels";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Fade>
        <H1 title="CALCULATOR" />
        <div className={`flex`}>
          <Levels />
          <Cart />
        </div>
      </Fade>
    </div>
  );
};

export default Calculator;
