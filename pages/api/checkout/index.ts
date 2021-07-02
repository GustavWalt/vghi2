import { VercelRequest, VercelResponse } from "@vercel/node";
const bcrypt = require("bcrypt");
import { Prisma, PrismaClient } from "@prisma/client";
import bosses from "../../../data/bosses.json";
import quests from "../../../data/quests.json";

const prisma = new PrismaClient();

export default async (request: VercelRequest, response: VercelResponse) => {
  try {
    if (request.method === "GET") {
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ orders: "orders" }));
    }
    if (request.method === "POST") {
      // Getting the data from client
      const bodyData = request.body;

      // Creating the user
      console.log(
        "name",
        bodyData.name,
        "phone",
        parseInt(bodyData.phone),
        "address",
        bodyData.address,
        "neighbourhood",
        bodyData.neighbourhood,
        "zip",
        parseInt(bodyData.zip),
        "email",
        bodyData.email
      );

      const user = await prisma.user.create({
        data: {
          name: bodyData.name,
          phone: parseInt(bodyData.phone),
          address: bodyData.address,
          neighbourhood: bodyData.neighbourhood,
          zip: parseInt(bodyData.zip),
          email: bodyData.email,
        },
      });

      // Creating the order with the userId
      console.log("user id for order creation", user.id);

      const order = await prisma.order.create({
        data: {
          userId: user.id,
        },
      });

      // Getting the orders into an array with the names
      const orders: string[] = [];
      bodyData.order.map((book) => {
        orders.push(book.name);
      });

      // SQL query to get the ID's from the product table in DB.
      bodyData.order.map(async (book) => {
        console.log("book name in find product", book.name);

        const response = await prisma.product.findUnique({
          where: {
            name: book.name,
          },
        });

        // Creating an orderItem in the table with correct data.
        console.log("response id above if statement", response.id);

        console.log(
          "order id",
          order.id,
          "response id",
          response.id,
          "book amount",
          book.amount
        );

        await prisma.orderItem.create({
          data: {
            amount: book.amount,
            productId: response.id,
            orderId: order.id,
          },
        });
      });

      // Resonse to client.
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ orders }));
    }
  } catch (err) {
    throw err;
  }
};
