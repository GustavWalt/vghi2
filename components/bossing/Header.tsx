import React from "react";
import styles from "../../style/modules/bossing/Header.module.scss";

import H1 from "../assets/H1";
import Table from "../assets/Table";

const Header = () => {
  return (
    <div className={styles.bossing}>
      <H1 title="Bossing Service" />
      <div className="flexCol">
        <Table data="bossing" />
      </div>
    </div>
  );
};

export default Header;
