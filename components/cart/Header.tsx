import React from "react";
import axios from "axios";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import styles from "../../style/modules/cart/Header.module.scss";

import H1 from "../assets/H1";

type Questing = {
  email: String;
  login: String;
  password: String;
  pin: Number;
  auth: String;
  discord: String;
  order: String;
};

const Header = () => {
  //Getting the data from the redux store
  const data = useSelector((state: RootStateOrAny) => state);

  //Function for checkout
  const checkout = async (values: any) => {
    const response = await axios.post("/api/questing", {
      email: "values.email",
      login: "values.login",
      password: "values.password",
      pin: "values.pin",
      auth: "values.auth",
      discord: "values.discord",
      order: "values.order",
    });
    console.log(response);
  };

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
        <button onClick={() => checkout("i")}>Checkout</button>
      </div>
    </div>
  );
};

export default Header;
