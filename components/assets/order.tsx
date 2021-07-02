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
    addToast(props.name + "  är nu tillagd i kundvagnen.", {
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
        Lägg till i varukorgen
      </button>
    </div>
  );
};

export default btn;
