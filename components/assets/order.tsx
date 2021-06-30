import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/cart";
import { ToastProvider, useToasts } from "react-toast-notifications";

const btn = (props) => {
  const dispatch = useDispatch();

  //Test product
  const product = {
    name: props.name,
    price: props.price,
  };

  const { addToast } = useToasts();
  const notification = () => {
    addToast(props.name + " has been added to the cart.", {
      appearance: "success",
      autoDismiss: true,
    });
  };
  const add = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="btn">
      <button
        onClick={() => {
          notification();
          add();
        }}
      >
        Lägg beställning
      </button>
    </div>
  );
};

export default btn;
