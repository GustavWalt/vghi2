import Head from "next/head";
import React from "react";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";

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
