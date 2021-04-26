import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TopBtn from "../../components/TopBtn";
import Meta from "../../components/TopBtn";
import React from "react";
const support = (props) => {
  return (
    <>
      <Head>
        <title>Support | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Navbar />
      <h1>Support</h1>
      <Footer />
    </>
  );
};

export default support;
