import Head from "next/head";
import React from "react";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";
import Btn from "../../components/assets/order";

//Components
import Header from "../../components/support/Header";

const support = (props) => {
  return (
    <>
      <Head>
        <title>Support | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <Btn />
        <Header />
        <Footer />
      </Fade>
    </>
  );
};

export default support;
