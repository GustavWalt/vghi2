import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/cart";

const btn = (props) => {
  const dispatch = useDispatch();

  //Test product
  const product = {
    name: props.name,
    price: props.price,
  };

  return (
    <div className="btn">
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  );
};

export default btn;
