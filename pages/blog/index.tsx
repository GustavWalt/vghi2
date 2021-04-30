import Head from "next/head";
import Navbar from "../../components/homePage/Navbar";
import Footer from "../../components/homePage/Footer";
import TopBtn from "../../components/homePage/TopBtn";
import Meta from "../../components/homePage/TopBtn";
import Fade from "../../components/assets/Fade";
import React from "react";
const blog = (props) => {
  return (
    <>
      <Head>
        <title>Blog | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <h1>BLOG</h1>
        <Footer />
      </Fade>
    </>
  );
};

export default blog;
