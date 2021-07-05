//React/Next/Styling stuff
import React, { useReducer, useMemo, useState } from "react";
import Image from "next/image";
import styles from "../../style/modules/cart/Header.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-responsive-modal/styles.css";

//API packages
import axios from "axios";

//Redux
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/cart";

//External packages (form/notifications/spinner/modal)
import { useToasts } from "react-toast-notifications";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { Modal } from "react-responsive-modal";

//Components
import GridItem from "../assets/GridItem";
import H1 from "../assets/H1";
import Fade from "../assets/Fade";
//---------------------------------------------------------

// Assigning type-safe for the form data.
interface FormTypes {
  email: string;
  name: String;
  phone: String;
  address: String;
  neighbourhood: String;
  zip: String;
}

//Yup
const schema = Yup.object().shape({
  name: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .required("Vänligen fyll i ett fullständigt namn."),

  email: Yup.string()
    .max(100, "För lång text.")
    .email("Felaktig email.")
    .required("Vänligen fyll i en korrekt email."),

  phone: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
    .required("Vänligen fyll i ett korrekt telefonnummer."),

  address: Yup.string()
    .max(100, "För lång text.")
    .required("Vänligen fyll i en korrekt adress."),

  zip: Yup.string()
    .max(5, "För många siffror.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
    .required("Vänligen fyll i ett korrekt postnummer."),

  neighbourhood: Yup.string()
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .max(100, "För lång text.")
    .required("Vänligen fyll i en korrekt ort."),
});

// Handles the state.
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

// Get current date
var rightNow = new Date();
var dateRightNow = rightNow.toISOString().slice(0, 10).replace(/-/g, "/");

const Header = () => {
  //States
  const [checkingOut, setCheckingOut] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  const [modalData, setModalData] = useState<FormTypes>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    neighbourhood: "",
  });

  // useReducer hook to set/get formData.
  const [formData, setFormData] = useReducer(formReducer, {});

  const { addToast } = useToasts();

  const dispatch = useDispatch();

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
  const checkout = async (props) => {
    // Display spinner
    setCheckingOut(true);
    document.body.classList.toggle("overflow-hidden");

    // Making API request to /api/questing to post the order.
    const response = await axios.post("/api/checkout", {
      email: props.email,
      name: props.name,
      phone: props.phone,
      address: props.address,
      neighbourhood: props.neighbourhood,
      zip: props.zip,
      order: finalCart,
    });

    //Remove spinner
    setCheckingOut(false);
    document.body.classList.toggle("overflow-hidden");

    // Logging response
    if (response.status === 201) {
      //Visa att köpet gick igenom
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
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
    <>
      {checkingOut && (
        <div className={styles.loader}>
          <Loader
            visible={true}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      )}

      <Modal open={openModal} onClose={onCloseModal} center>
        <h2>Tack för ditt köp {modalData.name}!</h2>
        <p>Fraktsätt: Postpaket</p>
        <p>Betalning: Faktura</p>
        <p>Beställningsdatum: {dateRightNow}</p>
        <br />
        <p>Adressuppgifter:</p>
        <p>Namn: {modalData.name}</p>
        <p>Mail: {modalData.email}</p>
        <p>Telefonnummer: {modalData.phone}</p>
        <p>Adress: {modalData.address}</p>
        <p>Postnummer: {modalData.zip}</p>
        <p>Ort: {modalData.neighbourhood}</p>
        <br />
        <p>Beställning:</p>
        {finalCart.map((item) => (
          <>
            <p>
              {item.name}: {item.amount}
            </p>
          </>
        ))}
        <br />
        <p>
          Vid några funderingar tveka inte att kontakta mig på vghi@gmail.com
        </p>
        <button onClick={onCloseModal}>Stäng</button>
      </Modal>

      <div className={`${styles.header}`}>
        <div className={styles.cart}>
          <H1 title="Steg 1 - Din Kundvagn" />
          <div className="flex">
            {finalCart.map((item) => (
              <>
                {item.amount > 0 ? (
                  <div
                    className={`flexCol ${styles.bookItem}`}
                    key={Date.now().toString()}
                  >
                    <Image src={item.img} alt="me" width="350" height="200" />
                    <div className={styles.bookData}>
                      <h1>{item.name}</h1>
                      <p>
                        <i>Frida Walter</i>
                      </p>
                      <hr />
                      <div className={` ${styles.price}`}>
                        <span
                          className={styles.plusMinus}
                          onClick={() => {
                            dispatch(removeFromCart(item.name));
                            const notification = () => {
                              addToast(
                                item.name + "  är nu borttagen i kundvagnen.",
                                {
                                  appearance: "error",
                                  autoDismiss: true,
                                }
                              );
                            };
                            notification();
                          }}
                        >
                          -
                        </span>
                        <span>Antal:{item.amount}</span>
                        <span
                          className={styles.plusMinus}
                          onClick={() => {
                            dispatch(
                              addToCart({ name: item.name, price: 149 })
                            );
                            const notification = () => {
                              addToast(
                                item.name + "  är nu tillagd i kundvagnen.",
                                {
                                  appearance: "success",
                                  autoDismiss: true,
                                }
                              );
                            };
                            notification();
                          }}
                        >
                          +
                        </span>
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
          <h2 style={{ marginTop: "20px" }}>
            {itemTotal === 0 ? (
              <b>Kundvagnen är tom</b>
            ) : (
              <b>Att betala inkl moms: {itemTotal}kr</b>
            )}
          </h2>
          <hr />
        </div>
        <div className={styles.payment}>
          <H1 title="Steg 2 - Leverans-uppgifter" />
          <Fade>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
                zip: "",
                neighbourhood: "",
              }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                setModalData(values);
                checkout(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className={styles.form}>
                  <label htmlFor="name">Fullständigt namn</label>
                  <Field
                    className={`${styles.input} ${
                      errors.name && touched.name ? styles.inputError : ""
                    }`}
                    name="name"
                    placeholder="Förnamn Efternamn"
                  />
                  {errors.name && touched.name ? (
                    <div className={styles.error}>{errors.name}</div>
                  ) : null}
                  <label htmlFor="email">Email</label>
                  <Field
                    className={`${styles.input} ${
                      errors.email && touched.email ? styles.inputError : ""
                    }`}
                    name="email"
                    type="email"
                    placeholder="Exempel@gmail.com"
                  />
                  {errors.email && touched.email ? (
                    <div className={styles.error}>{errors.email}</div>
                  ) : null}
                  <label htmlFor="phone">Telefonnummer</label>
                  <Field
                    className={`${styles.input} ${
                      errors.phone && touched.phone ? styles.inputError : ""
                    }`}
                    name="phone"
                    placeholder="07X-XXX XX XX"
                  />
                  {errors.phone && touched.phone ? (
                    <div className={styles.error}>{errors.phone}</div>
                  ) : null}
                  <label htmlFor="address">Adress</label>
                  <Field
                    className={`${styles.input} ${
                      errors.address && touched.address ? styles.inputError : ""
                    }`}
                    name="address"
                    placeholder="Gatan 87"
                  />
                  {errors.address && touched.address ? (
                    <div className={styles.error}>{errors.address}</div>
                  ) : null}
                  <label htmlFor="zip">Postnummer</label>
                  <Field
                    className={`${styles.input} ${
                      errors.zip && touched.zip ? styles.inputError : ""
                    }`}
                    name="zip"
                    placeholder="XXXXX"
                  />
                  {errors.zip && touched.zip ? (
                    <div className={styles.error}>{errors.zip}</div>
                  ) : null}
                  <label htmlFor="neighbourhood">Ort</label>
                  <Field
                    className={`${styles.input} ${
                      errors.neighbourhood && touched.neighbourhood
                        ? styles.inputError
                        : ""
                    }`}
                    name="neighbourhood"
                    placeholder="Ort"
                  />
                  {errors.neighbourhood && touched.neighbourhood ? (
                    <div className={styles.error}>{errors.neighbourhood}</div>
                  ) : null}
                  <button className={styles.checkoutBtn} type="submit">
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Header;
