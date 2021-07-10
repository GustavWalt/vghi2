import { VercelRequest, VercelResponse } from "@vercel/node";
const bcrypt = require("bcrypt");
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import * as Yup from "yup";
import { userInfo } from "os";

//Mail stuff
const mailgun = require("mailgun-js");

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
            orderDate: dateRightNow,
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

        const DOMAIN = "vghi.se";
        const mg = mailgun({
          apiKey: process.env.API_KEY,
          domain: DOMAIN,
          host: "api.eu.mailgun.net",
        });

        const data = {
          from: "Frida Walter <noreply@vghi.se>",
          to: `varforgarhoninte@outlook.com, noreply@vghi.se`,
          subject: `${deliveryInfo.name} vill beställa en bok!`,
          text: "Test",
          html: `<h1>${deliveryInfo.name} vill beställa en bok</h1>
          <h2>Fraktinformation</h2>
          <ul>
          <li>Namn: ${deliveryInfo.name}</li>
          <li>Email: ${deliveryInfo.email}</li>
          <li>Telefonnummer: ${deliveryInfo.phone}</li>
          <li>Adress: ${deliveryInfo.adress}</li>
          <li>Postnummer: ${deliveryInfo.zip}</li>
          <li>Ort: ${deliveryInfo.neighbourhood}</li>
          </ul>
          <h2>Orderinformation</h2>
          <ul>
          <li>Antal "Nu går jag!": ${orderInfo.amountNuGarJag}st</li>
          <li>Antal "Våga fråga!": ${orderInfo.amountVagaFraga}st</li>
          </ul>
          <h2>Fakturainformation (kan vara tomma fält)</h2>
          <ul>
          <li>Namn/företagsnamn: ${invoiceInfo.corporateName}</li>
          <li>Referens: ${invoiceInfo.corporateReference}</li>
          <li>Mailadress för faktura: ${invoiceInfo.corporateEmail}</li>
          <li>Telefonnummer: ${invoiceInfo.corporatePhone}</li>
          <li>Fakturaadress/box: ${invoiceInfo.corporateAdress}</li>
          <li>Postnummer: ${invoiceInfo.corporateZip}</li>
          <li>Ort: ${invoiceInfo.corporateNeighbourhood}</li>
          </ul>
          `,
        };
        mg.messages().send(data, function (error, body) {
          if (error) {
            console.log(error);
          } else {
            console.log(body);
          }
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
