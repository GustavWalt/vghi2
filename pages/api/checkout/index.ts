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

      //Yup
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(100, "För lång text.")
          .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
          .required("Vänligen fyll i ditt fullständiga namn."),

        email: Yup.string()
          .max(100, "För lång text.")
          .email("Felaktig email.")
          .required("Vänligen fyll i korrekt email."),

        phone: Yup.string()
          .max(100, "För lång text.")
          .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
          .required("Vänligen fyll i ditt telefonnummer."),

        address: Yup.string()
          .max(100, "För lång text.")
          .required("Vänligen fyll i din adress."),

        zip: Yup.string()
          .max(6, "För många siffror.")
          .matches(/^[0-9]*$/, "Endast siffror är tillåtna.")
          .required("Vänligen fyll i ditt postnummer."),

        neighbourhood: Yup.string()
          .matches(/^[a-öA-Ö ,.'-]+$/, "Endast bokstäver är tillåtna.")
          .max(100, "För lång text.")
          .required("Vänligen fyll i din ort."),
      });

      const isValid = await schema.isValid(bodyData);

      if (isValid === true) {
        // Get current date
        var rightNow = new Date();
        var dateRightNow = rightNow
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "/");

        const order = await prisma.order.create({
          data: {
            date: dateRightNow,
          },
        });

        const orderInfo = await prisma.orderInfo.create({
          data: {
            orderOrderId: order.orderId,
            amountNuGarJag: bodyData.order[0].amount,
            amountVagaFraga: bodyData.order[1].amount,
          },
        });

        const deliveryInfo = await prisma.deliveryInfo.create({
          data: {
            name: bodyData.name,
            email: bodyData.email,
            phone: bodyData.phone,
            adress: bodyData.address,
            zip: bodyData.zip,
            neighbourhood: bodyData.neighbourhood,
            orderOrderId: order.orderId,
          },
        });

        const invoiceInfo = await prisma.invoiceInfo.create({
          data: {
            corporateName: bodyData.invoiceName,
            corporateReference: bodyData.invoiceReference,
            corporateEmail: bodyData.invoiceEmail,
            corporatePhone: bodyData.invoicePhone,
            corporateAdress: bodyData.invoiceAddress,
            corporateZip: bodyData.invoiceZip,
            corporateNeighbourhood: bodyData.invoiceNeighbourhood,
            orderOrderId: order.orderId,
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
