import React, { useReducer } from "react";
import axios from "axios";
import { useSelector, RootStateOrAny } from "react-redux";
import styles from "../../style/modules/cart/Header.module.scss";

// Assigning type-safe for the form data.
interface FormTypes {
  email: string;
  name: String;
  phone: Number;
  address: String;
  neighbourhood: String;
  zip: Number;
}

// Handles the state.
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Header = () => {
  // useReducer hook to set/get formData.
  const [formData, setFormData] = useReducer(formReducer, {});

  // Runs when you submit the form.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Runs when you change something in the input fields.
  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  // Getting the data from the redux store (cart items).
  const data = useSelector((state: RootStateOrAny) => state);
  const cart = [];
  data.cart.items.map((item) => {
    cart.push(item);
  });

  // Function for checkout, runs when you submit the form.
  const checkout = async () => {
    // Creating an apiData object with correct types.
    const apiData: Partial<FormTypes> = {};

    // Looping through formData and assigning the values to apiData object.
    Object.entries(formData).map(([name, value]) =>
      Object.assign(apiData, { [name]: value })
    );

    // Making API request to /api/questing to post the order.
    const response = await axios.post("/api/checkout", {
      email: apiData.email,
      name: apiData.name,
      phone: apiData.phone,
      address: apiData.address,
      neighbourhood: apiData.neighbourhood,
      zip: apiData.zip,
      order: cart,
    });
    // Logging response
    console.log("API RESPONSE ", response);
  };

  // Frontend
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
            <p>Namn</p>
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            <p>Email</p>
            <input type="text" name="email" onChange={handleChange} />
          </label>
          <label>
            <p>Telefonnummer</p>
            <input type="text" name="phone" onChange={handleChange} />
          </label>
          <label>
            <p>Adress</p>
            <input type="text" name="address" onChange={handleChange} />
          </label>
          <label>
            <p>Ort</p>
            <input type="text" name="neighbourhood" onChange={handleChange} />
          </label>
          <label>
            <p>Postnummer</p>
            <input type="text" name="zip" onChange={handleChange} />
          </label>
          <br />
          <button type="submit" onClick={() => checkout()}>
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
