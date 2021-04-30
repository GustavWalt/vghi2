import Head from "next/head";
import Navbar from "../../components/homePage/Navbar";
import Footer from "../../components/homePage/Footer";
import TopBtn from "../../components/homePage/TopBtn";
import Meta from "../../components/homePage/TopBtn";
import Fade from "../../components/assets/Fade";
import React from "react";
const bossing = (props) => {
  return (
    <>
      <Head>
        <title>Bossing | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <h1>BOSSING</h1>
        <Footer />
      </Fade>
    </>
  );
};

export default bossing;
