import next from "next";
import { GetStaticProps } from "next";
import React from "react";
import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const orders = await prisma.order.findMany();
  return { props: { orders } };
};

const homePage = (props) => {
  return <h1>Hello</h1>;
};

export default homePage;
