import { VercelRequest, VercelResponse } from "@vercel/node";

type Order = {
  email: String;
  login: String;
  password: String;
  pin: Number;
  auth: String;
  discord: String;
  order: String;
  clevel: Number;
  dlevel: Number;
};

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "World" } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
