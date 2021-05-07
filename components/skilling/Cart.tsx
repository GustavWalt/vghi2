import React from "react";
import styles from "../../style/modules/skilling/Cart.module.scss";

//Assets components
import Fade from "../assets/Fade";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <Fade>
        <h2>Cart</h2>
        <div className="flex">
          <p>Total items:</p>
          <p>0</p>
        </div>
        <div className="flex">
          <p>Total price:</p>
          <p>$0</p>
        </div>
        <button>Checkout</button>
      </Fade>
    </div>
  );
};

export default Cart;
