import { VercelRequest, VercelResponse } from "@vercel/node";
const bcrypt = require("bcrypt");
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";

const prisma = new PrismaClient();

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    if (request.method === "GET") {
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ orders: "orders" }));
    }
    if (request.method === "POST") {
      // Getting the data from client
      const bodyData = request.body;

      //Yup schema
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(100, "För lång text.")
          .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
          .required("Vänligen fyll i ett fullständigt namn."),

        email: Yup.string()
          .max(100, "För lång text.")
          .email("Felaktig email.")
          .required("Vänligen fyll i en korrekt email."),

        phone: Yup.string()
          .max(100, "För lång text.")
          .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
          .required("Vänligen fyll i ett korrekt telefonnummer."),

        address: Yup.string()
          .max(100, "För lång text.")
          .required("Vänligen fyll i en korrekt adress."),

        zip: Yup.string()
          .max(5, "För många siffror.")
          .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
          .required("Vänligen fyll i ett korrekt postnummer."),

        neighbourhood: Yup.string()
          .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
          .max(100, "För lång text.")
          .required("Vänligen fyll i en korrekt ort."),
      });

      const isValid = await schema.isValid(bodyData);
      if (isValid === true) {
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
        for (const book of bodyData.order) {
          const response = await prisma.product.findUnique({
            where: {
              name: book.name,
            },
          });

          // Creating an orderItem in the table with correct data.
          if (book.amount > 0) {
            const orderItem = await prisma.orderItem.create({
              data: {
                amount: book.amount,
                productId: response.id,
                orderId: order.id,
              },
            });
          }
        }
      }

      // Resonse to client.
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({}));
    }
  } catch (err) {
    throw err;
  }
};
