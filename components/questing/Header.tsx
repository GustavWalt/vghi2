import React from "react";
import styles from "../../style/modules/questing/Header.module.scss";

import H1 from "../assets/H1";
import Table from "../assets/Table";
import Checkout from "../assets/Checkout";

const Header = () => {
  return (
    <div className={styles.questing}>
      <H1 title="Questing Service" />
      <div className="flex">
        <Table />
        <Checkout />
      </div>
    </div>
  );
};

export default Header;
