import React from "react";
import styles from "../../style/modules/information/Header.module.scss";

//Assets components
import H1 from "../assets/H1";
import GridItem from "../assets/GridItem";
import Order from "../assets/order";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.commonQuestions}>
        <H1 title="GDPR QUESTIONS" />
        <div className="flex">
          <GridItem title="Nu går jag!">
            <Order name={"Nu går jag!"} price={"149"} />
          </GridItem>
          <GridItem title="Våga fråga!">
            <Order name={"Våga fråga!"} price={"149"} />
          </GridItem>
        </div>
      </div>
    </div>
  );
};

export default Header;
