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
        const response = await prisma.product.findUnique({
          where: {
            name: book.name,
          },
        });

        // Creating an orderItem in the table with correct data.

        if (response?.id) {
          await prisma.orderItem.create({
            data: {
              amount: book.amount,
              productId: response.id,
              orderId: order.id,
            },
          });
        }
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
