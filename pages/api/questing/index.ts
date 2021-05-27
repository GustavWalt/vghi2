import { VercelRequest, VercelResponse } from "@vercel/node";
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
      //Getting the data from client
      const bodyData = request.body;

      //Creating the user
      const user = await prisma.user.create({
        data: {
          email: bodyData.email,
          login: bodyData.login,
          password: bodyData.password,
          pin: parseInt(bodyData.pin),
          auth: bodyData.auth,
          discord: bodyData.discord,
        },
      });

      //Creating the order with the userId
      const order = await prisma.order.create({
        data: {
          userId: user.id,
        },
      });

      // Look at what the cart includes, store them in an object to then check in the database that it exists
      const orders = [];
      bodyData.order.map((order) => {
        orders.push(order.product.name);
      });

      // Get the product ID's from the cart
      const products = await prisma.product.findMany({
        where: {
          name: "The Corsair Cove", //orders.name
        },
      });

      // Find the id
      // Assign the productId to orderItem

      const orderItem = await prisma.orderItem.create({
        data: {
          amount: bodyData.order.length,
          productId: 1, //Correct product ID
          orderId: order.id,
        },
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
