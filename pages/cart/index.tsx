import Head from "next/head";
import React from "react";

//Components
import Header from "../../components/cart/Header";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";

const cart = (props) => {
  return (
    <>
      <Head>
        <title>Bossing | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <Fade>
        <Navbar />
        <Header />
        <Footer />
      </Fade>
    </>
  );
};

export default cart;
