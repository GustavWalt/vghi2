import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TopBtn from "../../components/TopBtn";
import Meta from "../../components/TopBtn";
import React from "react";
const bossing = (props) => {
  return (
    <>
      <Head>
        <title>Bossing | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Navbar />
      <h1>BOSSING</h1>
      <Footer />
    </>
  );
};

export default bossing;
