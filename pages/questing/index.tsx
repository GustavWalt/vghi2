import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TopBtn from "../../components/TopBtn";
import Meta from "../../components/TopBtn";
import React from "react";
const questing = (props) => {
  return (
    <>
      <Head>
        <title>Questing | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Navbar />
      <h1>QUESTING</h1>
      <Footer />
    </>
  );
};

export default questing;
