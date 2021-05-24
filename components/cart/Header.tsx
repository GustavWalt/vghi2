import React, { useState } from "react";
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
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted form");
  };

  //Getting the data from the redux store
  const data = useSelector((state: RootStateOrAny) => state);
  const cart = [];
  data.cart.items.map((item) => {
    cart.push(item);
  });

  console.log("!=!=!=!=!=", cart);

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
    <div className={`flex ${styles.header}`}>
      <div className={styles.cart}>
        <h1>Cart</h1>
        {data.cart.items.map((item) => (
          <>
            <div className={`flexCol ${styles.cartItem}`}>
              <p>{item?.product?.name}</p>
              <p>{item?.product?.price}</p>
              <span>Amount: 1</span>
              <span>-----------------</span>
            </div>
          </>
        ))}
      </div>
      <div className={styles.payment}>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input type="text" name="email" />
          </label>
          <label>
            <p>Login</p>
            <input type="text" name="login" />
          </label>
          <label>
            <p>Password</p>
            <input type="text" name="password" />
          </label>
          <label>
            <p>Pin</p>
            <input type="text" name="pin" />
          </label>
          <label>
            <p>Pin</p>
            <input type="text" name="pin" />
          </label>
          <label>
            <p>Auth</p>
            <input placeholder="yes/no" type="text" name="auth" />
          </label>
          <label>
            <p>Discord</p>
            <input type="text" name="discord" />
          </label>
        </form>
        <button onClick={() => checkout("i")}>Checkout</button>
      </div>
    </div>
  );
};

export default Header;
