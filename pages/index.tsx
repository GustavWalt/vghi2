import next from "next";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import BlogPosts from "../components/BlogPosts";
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
      <Navbar />
      <Header />
      <Services />
      <About />
      <BlogPosts />
    </>
  );
};

export default homePage;
