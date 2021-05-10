import React from "react";
import styles from "../../style/modules/bossing/Header.module.scss";

import H1 from "../assets/H1";
import Table from "../assets/Table";
import Checkout from "../assets/Checkout";

const Header = () => {
  return (
    <div className={styles.bossing}>
      <H1 title="Bossing Service" />
      <div className="flex">
        <Table />
        <Checkout />
      </div>
    </div>
  );
};

export default Header;
