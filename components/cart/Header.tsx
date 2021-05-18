import React from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import styles from "../../style/modules/cart/Header.module.scss";

import H1 from "../assets/H1";

const Header = () => {
  const data = useSelector((state: RootStateOrAny) => state);

  return (
    <div className={styles.header}>
      <H1 title="Cart" />
      {data.cart.items.map((item) => (
        <div>
          <div className="flexCol">
            <p>{item?.product?.name}</p>
            <p>{item?.product?.price}</p>
            <span>Amount: 1</span>
            <span>----------------</span>
          </div>
        </div>
      ))}
      <div className="payment">
        <H1 title="Checkout" />
      </div>
    </div>
  );
};

export default Header;
