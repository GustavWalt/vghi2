import React from "react";
import styles from "../../style/modules/questing/Header.module.scss";

//Assets
import H1 from "../assets/H1";
import Table from "../assets/Table";

const Header = () => {
  return (
    <div className={styles.questing}>
      <H1 title="Questing Service" />
      <div className="flexCol">
        <Table data="questing" />
      </div>
    </div>
  );
};

export default Header;
