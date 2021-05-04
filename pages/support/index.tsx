import Head from "next/head";
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/homePage/TopBtn";
import Meta from "../../components/homePage/TopBtn";
import Fade from "../../components/assets/Fade";
import React from "react";
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
        <h1>Support</h1>
        <Footer />
      </Fade>
    </>
  );
};

export default support;
