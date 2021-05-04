import next from "next";
import Head from "next/head";
import Navbar from "../components/assets/Navbar";
import Header from "../components/homePage/Header";
import Services from "../components/homePage/Services";
import About from "../components/homePage/About";
import BlogPosts from "../components/homePage/BlogPosts";
import Footer from "../components/assets/Footer";
import Meta from "../components/homePage/Meta";
import TopBtn from "../components/homePage/TopBtn";
import Fade from "../components/assets/Fade";
import { GetStaticProps } from "next";
import React from "react";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const orders = await prisma.order.findMany();
  return { props: { orders } };
};

const homePage = (props) => {
  return (
    <>
      <Head>
        <title>Home | RSBoosts | Cheap & Reliable OSRS Services</title>
        <Meta />
      </Head>
      <TopBtn />
      <Fade>
        <Navbar />
        <Header />
        <Services />
        <About />
        <BlogPosts />
        <Footer />
      </Fade>
    </>
  );
};

export default homePage;
