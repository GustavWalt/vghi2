import Head from "next/head";
import Navbar from "../../components/assets/Navbar";
import Skills from "../../components/skilling/Skills";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/homePage/TopBtn";
import Calculator from "../../components/skilling/Calculator";
import Meta from "../../components/homePage/TopBtn";
import Fade from "../../components/assets/Fade";
import React from "react";
const skilling = (props) => {
  return (
    <>
      <Head>
        <title>Skilling | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <Skills />
        <Calculator />
        <Footer />
      </Fade>
    </>
  );
};

export default skilling;
