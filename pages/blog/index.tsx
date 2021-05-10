import Head from "next/head";
import React from "react";

//Components
import Header from "../../components/blog/Header";

//Assets
import Navbar from "../../components/assets/Navbar";
import Footer from "../../components/assets/Footer";
import TopBtn from "../../components/assets/TopBtn";
import Meta from "../../components/assets/Meta";
import Fade from "../../components/assets/Fade";

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
        <Header />
        <Footer />
      </Fade>
    </>
  );
};

export default blog;
