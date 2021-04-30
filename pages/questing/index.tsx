import Head from "next/head";
import Navbar from "../../components/homePage/Navbar";
import Footer from "../../components/homePage/Footer";
import TopBtn from "../../components/homePage/TopBtn";
import Meta from "../../components/homePage/TopBtn";
import Fade from "../../components/assets/Fade";
import React from "react";
const questing = (props) => {
  return (
    <>
      <Head>
        <title>Questing | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <h1>QUESTING</h1>
        <Footer />
      </Fade>
    </>
  );
};

export default questing;
