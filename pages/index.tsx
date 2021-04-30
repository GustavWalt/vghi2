import next from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import TopBtn from "../components/TopBtn";
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
