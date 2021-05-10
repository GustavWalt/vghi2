import Head from "next/head";
import React from "react";

//Components
import Header from "../../components/bossing/Header";

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
        <Header />
        <Footer />
      </Fade>
    </>
  );
};

export default bossing;
