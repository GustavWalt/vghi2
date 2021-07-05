import { VercelRequest, VercelResponse } from "@vercel/node";
const bcrypt = require("bcrypt");
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import { userInfo } from "os";

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

      // Yup schema
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(100, "För lång text.")
          .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
          .required("Vänligen fyll i ett fullständigt namn."),

        email: Yup.string()
          .max(100, "För lång text.")
          .email("Felaktig email.")
          .required("Vänligen fyll i en korrekt email."),

        subject: Yup.string()
          .max(100, "För lång text.")
          .required("Vänligen fyll i en titel."),

        description: Yup.string()
          .max(500, "För lång text.")
          .required("Vänligen fyll i en beskrivning."),
      });

      const isValid = await schema.isValid(bodyData);
      if (isValid === true) {
        const contact = await prisma.contact.create({
          data: {
            name: bodyData.name,
            email: bodyData.email,
            subject: bodyData.subject,
            description: bodyData.description,
          },
        });
      }

      // Resonse to client.
      response.statusCode = 201;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify({ bodyData }));
    }
  } catch (err) {
    throw err;
  }
};
