//React/Next/Styling stuff
import React, { useReducer, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../style/modules/cart/Header.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-responsive-modal/styles.css";

//API packages
import axios from "axios";

//Redux
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "../../redux/cart";

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
  invoiceEmail: string;
  name: string;
  invoiceName: string;
  invoiceReference: string;
  phone: string;
  invoicePhone: string;
  address: string;
  invoiceAddress: string;
  neighbourhood: string;
  invoiceNeighbourhood: string;
  zip: string;
  invoiceZip: string;
}

//Yup
const schema = Yup.object().shape({
  name: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .required("Vänligen fyll i ditt fullständiga namn."),

  invoiceName: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna."),

  invoiceReference: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna."),

  email: Yup.string()
    .max(100, "För lång text.")
    .email("Felaktig email.")
    .required("Vänligen fyll i korrekt email."),

  invoiceEmail: Yup.string()
    .max(100, "För lång text.")
    .email("Felaktig email."),

  phone: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
    .required("Vänligen fyll i ditt telefonnummer."),

  invoicePhone: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna."),

  address: Yup.string()
    .max(100, "För lång text.")
    .required("Vänligen fyll i din adress."),

  invoiceAddress: Yup.string().max(100, "För lång text."),

  zip: Yup.string()
    .max(6, "För många siffror.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
    .required("Vänligen fyll i ditt postnummer."),

  invoiceZip: Yup.string()
    .max(6, "För många siffror.")
    .matches(/^[0-9]*$/, "Endast siffror är tillåtna."),

  neighbourhood: Yup.string()
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .max(100, "För lång text.")
    .required("Vänligen fyll i din ort."),

  invoiceNeighbourhood: Yup.string()
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .max(100, "För lång text."),
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
  const [failedCheckout, setFailedCheckout] = useState(false);
  const [successCheckout, setSuccessCheckout] = useState(false);
  const [newPaymentOpen, setNewPaymentOpen] = useState(true);

  const onCloseSuccessCheckout = () => {
    setSuccessCheckout(false);
    //Remove items from Redux
    dispatch(clearCart());
  };
  const onCloseFailedCheckout = () => {
    setFailedCheckout(false);
  };

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    setNewPaymentOpen(isChecked);
  };

  const [modalData, setModalData] = useState<FormTypes>({
    name: "",
    invoiceName: "",
    email: "",
    invoiceEmail: "",
    invoiceReference: "",
    phone: "",
    invoicePhone: "",
    address: "",
    invoiceAddress: "",
    zip: "",
    invoiceZip: "",
    neighbourhood: "",
    invoiceNeighbourhood: "",
  });

  // useReducer hook to set/get formData.
  const [formData, setFormData] = useReducer(formReducer, {});

  const { addToast } = useToasts();

  const dispatch = useDispatch();

  // Getting the data from the redux store (cart items).
  const data = useSelector((state: RootStateOrAny) => state);
  const cart = [];
  data.cart.items.map((item) => {
    cart.push(item);
  });

  // Function for checkout, runs when you submit the form.
  const checkout = async (props) => {
    if (cart.length === 0) {
      console.log("Din varukorg är tom. Vänligen lägg till produkter.");
      setFailedCheckout(true);
    } else {
      // Display spinner
      setCheckingOut(true);
      document.body.classList.toggle("overflow-hidden");

      // Making API request to /api/questing to post the order.
      const response = await axios.post("/api/checkout", {
        email: props.email,
        invoiceEmail: props.invoiceEmail,
        name: props.name,
        invoiceName: props.invoiceName,
        invoiceReference: props.invoiceReference,
        phone: props.phone,
        invoicePhone: props.invoicePhone,
        address: props.address,
        invoiceAddress: props.invoiceAddress,
        neighbourhood: props.neighbourhood,
        invoiceNeighbourhood: props.invoiceNeighbourhood,
        zip: props.zip,
        invoiceZip: props.invoiceZip,
        order: finalCart,
      });

      console.log(response.data);

      //Remove spinner
      setCheckingOut(false);
      document.body.classList.toggle("overflow-hidden");

      // Logging response
      if (response.status === 201) {
        //Visa att köpet gick igenom
        setSuccessCheckout(true);
      } else {
        setFailedCheckout(true);
      }
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

      <Modal open={failedCheckout} onClose={onCloseFailedCheckout} center>
        <h1 style={{ color: "red" }}>Hej {modalData.name}!</h1>
        <h4 style={{ color: "red" }}>Din varukorg är tom.</h4>
        <Link href="/shop">
          <button className={styles.checkoutBtn}>Beställ böcker</button>
        </Link>
      </Modal>

      <Modal open={successCheckout} onClose={onCloseSuccessCheckout} center>
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
        {modalData.invoiceNeighbourhood != "" && (
          <>
            <br />
            <p>Faktureringsuppgifter:</p>
            <p>Namn: {modalData.invoiceName}</p>
            <p>Mail: {modalData.invoiceEmail}</p>
            <p>Telefonnummer: {modalData.invoicePhone}</p>
            <p>Adress: {modalData.invoiceAddress}</p>
            <p>Postnummer: {modalData.invoiceZip}</p>
            <p>Ort: {modalData.invoiceNeighbourhood}</p>
          </>
        )}
        <br />
        <p>Beställning:</p>
        {finalCart.map((item) => (
          <>
            <p>
              {item.amount > 0 && (
                <>
                  {item.name}: {item.amount}
                </>
              )}
            </p>
          </>
        ))}
        <br />
        <p>
          Vid några funderingar tveka inte att kontakta mig på
          varforgarhoninte@outlook.com
        </p>
        <button className={styles.checkoutBtn} onClick={onCloseSuccessCheckout}>
          STÄNG
        </button>
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
          {itemTotal === 0 ? (
            <>
              <h2 style={{ color: "red", marginTop: "2rem" }}>
                <b>Kundvagnen är tom</b>
              </h2>
              <br />
              <Link href="/shop">
                <button className={styles.checkoutBtn}>Beställ böcker</button>
              </Link>
            </>
          ) : (
            <>
              <h2 style={{ marginTop: "20px" }}>
                <b>Att betala inkl moms: {itemTotal}kr + frakt</b>
              </h2>
              <li>
                Fraktkostnad tillkommer och kan variera beroende på antal
                beställda böcker.
              </li>
            </>
          )}
          <hr />
        </div>
        <div className={styles.payment}>
          <H1 title="Steg 2 - Leverans-uppgifter" />
          <Fade>
            <Formik
              initialValues={{
                name: "",
                invoiceName: "",
                invoiceReference: "",
                email: "",
                invoiceEmail: "",
                phone: "",
                invoicePhone: "",
                address: "",
                invoiceAddress: "",
                zip: "",
                invoiceZip: "",
                neighbourhood: "",
                invoiceNeighbourhood: "",
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
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
                  <label htmlFor="phone">Telefonnummer</label>
                  <Field
                    className={`${styles.input} ${
                      errors.phone && touched.phone ? styles.inputError : ""
                    }`}
                    name="phone"
                    placeholder="07XXXXXXXX"
                  />
                  {errors.phone && touched.phone ? (
                    <div className={styles.error}>{errors.phone}</div>
                  ) : null}

                  {/* Adress */}
                  <label htmlFor="address">Leveransadress</label>
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

                  {/* Zip */}
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

                  {/* Neighbourhood */}
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

                  <label className={styles.label}>
                    <input
                      className={styles.checkBox}
                      type="checkbox"
                      name="newPayment"
                      defaultChecked
                      checked={newPaymentOpen}
                      onChange={handleChange}
                    />
                    <span className={styles.checkmark}></span>
                    <p>Min betalnings- och leveransadress är den samma.</p>
                  </label>
                  {console.log(newPaymentOpen)}

                  {/* Extra fields */}
                  {newPaymentOpen === false && (
                    <Fade>
                      <div className={styles.fakturering}>
                        <div className={styles.title}>
                          <H1 title="Steg 3 - Fakturerings-information" />
                        </div>

                        {/* Name */}
                        <label htmlFor="invoiceName">
                          Fullständigt namn/företagsnamn
                        </label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceName && touched.invoiceName
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceName"
                          placeholder="Namn/Bolaget AB"
                        />
                        {errors.invoiceName && touched.invoiceName ? (
                          <div className={styles.error}>
                            {errors.invoiceName}
                          </div>
                        ) : null}

                        {/* Reference */}
                        <label htmlFor="invoiceReference">Referens</label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceReference && touched.invoiceReference
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceReference"
                          placeholder="Förnamn Efternamn"
                        />
                        {errors.invoiceReference && touched.invoiceReference ? (
                          <div className={styles.error}>
                            {errors.invoiceReference}
                          </div>
                        ) : null}

                        {/* Email */}
                        <label htmlFor="invoiceEmail">
                          Mailadress för faktura via email
                        </label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceEmail && touched.invoiceEmail
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceEmail"
                          type="email"
                          placeholder="Exempel@gmail.com"
                        />
                        {errors.invoiceEmail && touched.invoiceEmail ? (
                          <div className={styles.error}>
                            {errors.invoiceEmail}
                          </div>
                        ) : null}
                        {/* Phone */}
                        <label htmlFor="invoicePhone">Telefonnummer</label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoicePhone && touched.invoicePhone
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoicePhone"
                          placeholder="XXXXXXXX"
                        />
                        {errors.invoicePhone && touched.invoicePhone ? (
                          <div className={styles.error}>
                            {errors.invoicePhone}
                          </div>
                        ) : null}
                        {/* Adress */}
                        <label htmlFor="invoiceAddress">
                          Fakturaadress/box
                        </label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceAddress && touched.invoiceAddress
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceAddress"
                          placeholder="Gatan 87/Box"
                        />
                        {errors.invoiceAddress && touched.invoiceAddress ? (
                          <div className={styles.error}>
                            {errors.invoiceAddress}
                          </div>
                        ) : null}
                        {/* Zip */}
                        <label htmlFor="invoiceZip">Postnummer</label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceZip && touched.invoiceZip
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceZip"
                          placeholder="XXXXX"
                        />
                        {errors.invoiceZip && touched.invoiceZip ? (
                          <div className={styles.error}>
                            {errors.invoiceZip}
                          </div>
                        ) : null}
                        {/* Neighbourhood */}
                        <label htmlFor="invoiceNeighbourhood">Ort</label>
                        <Field
                          className={`${styles.input} ${
                            errors.invoiceNeighbourhood &&
                            touched.invoiceNeighbourhood
                              ? styles.inputError
                              : ""
                          }`}
                          name="invoiceNeighbourhood"
                          placeholder="Ort"
                        />
                        {errors.invoiceNeighbourhood &&
                        touched.invoiceNeighbourhood ? (
                          <div className={styles.error}>
                            {errors.invoiceNeighbourhood}
                          </div>
                        ) : null}
                      </div>
                    </Fade>
                  )}

                  {/* Checkout */}
                  <button className={styles.checkoutBtn} type="submit">
                    Köp
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
