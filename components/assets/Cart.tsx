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
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFF"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.7228 21.1427C28.0927 21.1089 27.5552 21.6948 27.5298 22.2846C27.4973 23.0543 28.0943 23.5625 28.6709 23.5879C29.3411 23.6176 29.893 23.0018 29.8977 22.3894C29.9033 21.695 29.3241 21.1127 28.7228 21.1427ZM18.1068 22.3513C18.0796 23.0487 18.6544 23.5614 19.2413 23.5876C19.9149 23.6176 20.4562 23.0039 20.469 22.4076C20.4839 21.692 19.8938 21.1489 19.3118 21.1352C18.6769 21.1203 18.0675 21.7048 18.1068 22.3513ZM27.1425 19.1014C27.1425 18.5866 27.1459 18.0801 27.141 17.5733C27.1387 17.361 27.1414 17.1446 27.1032 16.9377C26.9491 16.1052 26.5583 15.4145 25.9022 14.8963C25.1051 14.266 24.2116 14.0889 23.2419 14.3206C22.4865 14.5013 21.8917 14.9511 21.4398 15.5863C21.0683 16.1082 20.8536 16.7026 20.8567 17.3659C20.8594 17.8853 20.8574 18.4048 20.8574 18.9242V19.1014H27.1425ZM17.7139 19.1136C17.7139 18.5359 17.7106 17.9884 17.7148 17.4411C17.72 16.8104 17.8081 16.1932 17.9884 15.5887C18.1778 14.9548 18.4498 14.3647 18.8136 13.8196C19.1894 13.2572 19.6344 12.7681 20.1611 12.3473C20.7622 11.8672 21.418 11.5145 22.1384 11.2809C22.6051 11.1295 23.0802 11.0235 23.5705 11.0135C23.9207 11.0063 24.2736 10.9847 24.6208 11.0182C25.2556 11.0791 25.8694 11.2449 26.4579 11.505C26.9673 11.73 27.4406 12.0188 27.8732 12.3735C28.2539 12.6858 28.5976 13.041 28.9028 13.4337C29.2433 13.8719 29.5167 14.3529 29.7375 14.866C29.9531 15.3674 30.1009 15.8903 30.1867 16.4322C30.3116 17.2233 30.2811 18.0207 30.2842 18.817C30.2844 18.9067 30.2842 18.9964 30.2842 19.1045H34.9979V19.3028C34.9979 23.8762 35.0056 28.4496 34.9914 33.0227C34.989 33.8761 34.7214 34.664 34.2156 35.3535C33.8019 35.9175 33.2916 36.346 32.6617 36.637C32.0631 36.9137 31.4405 36.9999 30.7956 36.9999C26.181 36.9988 21.5661 37.0023 16.9512 36.9969C16.0642 36.9958 15.2468 36.7272 14.5428 36.1658C13.758 35.5395 13.2641 34.707 13.0716 33.6983C13.0168 33.4104 13.0033 33.1101 13.0031 32.8153C12.9989 28.3268 13.0002 23.8383 13.0002 19.3496V19.1136H17.7139Z"
                fill="white"
              ></path>
            </svg>
          </Link>
          {data.cart.items.length > 0 && (
            <span className={styles.cartItems}>{data.cart.items.length}</span>
          )}
        </button>
        <Link href="/cart">
          <button>
            <span>To the cart →</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
