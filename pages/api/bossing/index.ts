import { VercelRequest, VercelResponse } from "@vercel/node";

type Bossing = {
  email: String;
  login: String;
  password: String;
  pin: Number;
  auth: String;
  discord: String;
  order: String;
  boss: String;
  amount: Number;
};

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "World" } = request.query;
  response.status(200).send(`Hello ${name}!`);
};
