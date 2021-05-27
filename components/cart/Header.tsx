import React, { useReducer } from "react";
import axios from "axios";
import { useSelector, RootStateOrAny } from "react-redux";
import styles from "../../style/modules/cart/Header.module.scss";

// Assigning type-safe for the form data.
interface FormTypes {
  email: string;
  login: string;
  password: string;
  pin: number;
  auth: string;
  discord: string;
  order: string;
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
    const response = await axios.post("/api/questing", {
      email: apiData.email,
      login: apiData.login,
      password: apiData.password,
      pin: apiData.pin,
      auth: apiData.auth,
      discord: apiData.discord,
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
            <p>Email</p>
            <input type="text" name="email" onChange={handleChange} />
          </label>
          <label>
            <p>Login</p>
            <input type="text" name="login" onChange={handleChange} />
          </label>
          <label>
            <p>Password</p>
            <input type="text" name="password" onChange={handleChange} />
          </label>
          <label>
            <p>Pin</p>
            <input type="text" name="pin" onChange={handleChange} />
          </label>
          <label>
            <p>Auth</p>
            <select name="auth" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            <p>Discord</p>
            <input type="text" name="discord" onChange={handleChange} />
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
