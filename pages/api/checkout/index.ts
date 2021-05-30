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

      // Creating hashed password & email
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const passHash = bcrypt.hashSync(bodyData.password, salt);
      const loginHash = bcrypt.hashSync(bodyData.login, salt);

      // Creating the user
      const user = await prisma.user.create({
        data: {
          email: bodyData.email,
          login: loginHash,
          password: passHash,
          pin: parseInt(bodyData.pin),
          auth: bodyData.auth,
          discord: bodyData.discord,
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

      interface Product {
        name: string;
        price: number;
      }

      interface Order {
        product: Product;
        amount: number;
      }

      bodyData.order.map((order: Order) => {
        console.log(order);
        orders.push(order.product.name);
      });

      // SQL query to get the ID's from the product table in DB.
      orders.map(async (name: any) => {
        const response = await prisma.product.findUnique({
          where: {
            name: name,
          },
        });

        // Creating an orderItem in the table with correct data.
        if (response?.id) {
          await prisma.orderItem.create({
            data: {
              amount: bodyData.order.length,
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
