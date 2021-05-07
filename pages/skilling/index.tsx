import Head from "next/head";
import React from "react";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";

//Skilling components
import Calculator from "../../components/skilling/Calculator";
import Skills from "../../components/skilling/Skills";

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
