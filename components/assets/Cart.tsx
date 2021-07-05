import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import styles from "../../style/modules/assets/Cart.module.scss";

const Cart = (props) => {
  const data = useSelector((state: RootStateOrAny) => state);

  return (
    <div className={styles[props.className]}>
      <div className={styles.cart}>
        <button className={`${styles.btn}`}>
          <Link href="/cart">
            <a>
              <Image
                width="50"
                height="50"
                src="/shopping-cart.png"
                alt="Shopping cart icon"
              />
              <p className={styles.cartText}>Kundvagn</p>
            </a>
          </Link>
          {data.cart.items.length > 0 && (
            <span className={styles.cartItems}>{data.cart.items.length}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Cart;
