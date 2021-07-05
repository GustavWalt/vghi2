//React/Next/Styling stuff
import React, { useReducer, useMemo, useState } from "react";
import Image from "next/image";
import styles from "../../style/modules/cart/Header.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-responsive-modal/styles.css";

//API packages
import axios from "axios";

//External packages (form/notifications/spinner/modal)
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { Modal } from "react-responsive-modal";

//Components
import H1 from "../assets/H1";
import Fade from "../assets/Fade";
//---------------------------------------------------------

interface FormTypes {
  email: string;
  name: String;
  subject: String;
  description: String;
}

//Yup
const schema = Yup.object().shape({
  name: Yup.string()
    .max(100, "För lång text.")
    .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
    .required("Vänligen fyll i ditt fullständiga namn."),

  email: Yup.string()
    .max(100, "För lång text.")
    .email("Felaktig email.")
    .required("Vänligen fyll i korrekt email."),

  subject: Yup.string()
    .max(100, "För lång text.")
    .required("Vänligen fyll i ämne."),

  description: Yup.string()
    .max(500, "För lång text.")
    .required("Beskriv ditt ärende."),
});

// Get current date
var rightNow = new Date();
var dateRightNow = rightNow.toISOString().slice(0, 10).replace(/-/g, "/");

const Header = () => {
  //States
  const [modalData, setModalData] = useState<FormTypes>({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const onCloseModal = () => setOpenModal(false);

  // Function for checkout, runs when you submit the form.
  const checkout = async (props) => {
    // Making API request to /api/questing to post the order.
    const response = await axios.post("/api/kontakt", {
      name: props.name,
      email: props.email,
      subject: props.subject,
      description: props.description,
    });

    // Logging response
    if (response.status === 201) {
      //Visa att köpet gick igenom
      setOpenModal(true);
      setModalData(response.data.bodyData);
    } else {
      setOpenModal(false);
    }
  };

  // Frontend
  return (
    <>
      <Modal open={openModal} onClose={onCloseModal} center>
        <h1>Tack för att du har kontaktat mig, {modalData.name}!</h1>
        <p>Namn: {modalData.name}</p>
        <p>Ämne: {modalData.subject}</p>
        <p>Beskrivning: {modalData.description}</p>
        <button onClick={onCloseModal}>Stäng</button>
      </Modal>

      <div className={`${styles.header}`}>
        <H1 title="KONTAKT" />
        <div className={styles.payment}>
          <Fade>
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                description: "",
              }}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                resetForm();
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

                  <label htmlFor="subject">Ämne</label>
                  <Field
                    className={`${styles.input} ${
                      errors.subject && touched.subject ? styles.inputError : ""
                    }`}
                    name="subject"
                    placeholder="Ämne"
                  />
                  {errors.subject && touched.subject ? (
                    <div className={styles.error}>{errors.subject}</div>
                  ) : null}

                  <label htmlFor="description">Beskrivning</label>
                  <Field
                    as="textarea"
                    className={`${styles.input} ${
                      errors.description && touched.description
                        ? styles.inputError
                        : ""
                    }`}
                    name="description"
                    placeholder="Beskriv ditt ärende."
                  />
                  {errors.description && touched.description ? (
                    <div className={styles.error}>{errors.description}</div>
                  ) : null}

                  <button className={styles.checkoutBtn} type="submit">
                    Skicka
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
