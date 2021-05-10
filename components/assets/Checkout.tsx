import React from "react";
import styles from "../../style/modules/assets/Table.module.scss";

const Header = () => {
  return (
    <>
      <table className={styles.table}>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        <button>Checkout</button>
      </table>
    </>
  );
};

export default Header;
