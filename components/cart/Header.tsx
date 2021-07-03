import React, { useReducer, useMemo } from "react";
import axios from "axios";
import Image from "next/image";
import { useSelector, RootStateOrAny } from "react-redux";
import styles from "../../style/modules/cart/Header.module.scss";

//Components
import GridItem from "../assets/GridItem";
import H1 from "../assets/H1";
import Fade from "../assets/Fade";
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
      order: finalCart,
    });
    // Logging response
    console.log("API RESPONSE ", response);
  };

  var finalCart = [
    { name: "Nu går jag!", amount: 0, img: "/bok1.jpg", totalPrice: 0 },
    { name: "Våga fråga!", amount: 0, img: "/bok2.jpg", totalPrice: 0 },
  ];
  data.cart.items.map((item) => {
    finalCart.map((book) => {
      if (item.product.name == book.name) {
        book.amount += 1;
      }
    });
  });

  const itemTotal = useMemo(
    () =>
      data.cart.items.reduce(
        (total, item) => (total += parseInt(item?.product?.price)),
        0
      ),
    [data.cart]
  );
  finalCart[0].totalPrice = finalCart[0].amount * 149;
  finalCart[1].totalPrice = finalCart[1].amount * 149;
  // Frontend
  return (
    <div className={`${styles.header}`}>
      <div className={styles.cart}>
        <H1 title="Steg 1 - Din Kundvagn" />
        <div className="flex">
          {finalCart.map((item) => (
            <>
              {item.amount > 0 ? (
                <div className={`flexCol ${styles.bookItem}`}>
                  <Image src={item.img} alt="me" width="350" height="200" />
                  <div className={styles.bookData}>
                    <h1>{item.name}</h1>
                    <p>
                      <i>Frida Walter</i>
                    </p>
                    <hr />
                    <div className={` ${styles.price}`}>
                      <span>Antal:{item.amount}</span>
                      <br />
                      <span>{item.totalPrice}kr</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
        <h2>
          <b>Att betala inkl moms: {itemTotal}kr</b>
        </h2>
        <hr />
      </div>

      <div className={styles.payment}>
        <H1 title="Steg 2 - Leveransuppgifter" />
        <Fade>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Fullständigt namn</p>
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
              <p>Postnummer</p>
              <input type="text" name="zip" onChange={handleChange} />
            </label>
            <label>
              <p>Ort</p>
              <input type="text" name="neighbourhood" onChange={handleChange} />
            </label>
            <br />
            <button
              className={styles.checkoutBtn}
              type="submit"
              onClick={() => checkout()}
            >
              Köp nu
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default Header;
