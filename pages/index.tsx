import next from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import React from "react";
import prisma from "../lib/prisma";

//Assets
import Navbar from "../components/assets/Navbar";
import Footer from "../components/assets/Footer";
import TopBtn from "../components/assets/TopBtn";
import Fade from "../components/assets/Fade";
import Meta from "../components/assets/Meta";

//HomePage components
import Header from "../components/homePage/Header";
import Services from "../components/homePage/Services";
import About from "../components/homePage/About";
import BlogPosts from "../components/homePage/BlogPosts";
import Btn from "../components/assets/order";

const homePage = (props) => {
  return (
    <>
      <Head>
        <title>Home | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <Fade>
        <Navbar />
        <Header />
        <Services />
        <About />
        <Footer />
      </Fade>
    </>
  );
};

export default homePage;
