import { VercelRequest, VercelResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type Questing = {
  email: String;
  login: String;
  password: String;
  pin: Number;
  auth: String;
  discord: String;
  order: String;
};

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    if (request.method === "GET") {
      const orders = await prisma.order.findMany();
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ orders: orders }));
    }
    if (request.method === "POST") {
      //Logik för att sätta in i db te.x
      const orders = request.body;

      //Response till client
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ orders: orders }));
    }
  } catch (err) {
    throw err;
  }
};
