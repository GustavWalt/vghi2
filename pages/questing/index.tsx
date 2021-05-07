import Head from "next/head";
import React from "react";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";

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
