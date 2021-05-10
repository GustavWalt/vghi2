import Head from "next/head";
import React from "react";

//Components
import Header from "../../components/questing/Header";

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
        <Header />
        <Footer />
      </Fade>
    </>
  );
};

export default questing;
