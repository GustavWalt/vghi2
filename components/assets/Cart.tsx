import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Link from "next/link";
import styles from "../../style/modules/assets/Cart.module.scss";

const Cart = (props) => {
  const data = useSelector((state: RootStateOrAny) => state);

  return (
    <>
      <div className={styles.cart}>
        <button className={styles.btn}>
          <Link href="/cart">
            <img
              width="50"
              height="50"
              src="/shopping-cart.png"
              alt="Shopping cart icon"
            />
          </Link>
          {data.cart.items.length > 0 && (
            <span className={styles.cartItems}>{data.cart.items.length}</span>
          )}
        </button>
      </div>
    </>
  );
};

export default Cart;
