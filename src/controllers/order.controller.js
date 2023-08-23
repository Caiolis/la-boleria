import { insertOrderIntoDb } from "../repositories/order.repository.js";

export async function createOrder(req, res) {
  try {
    const query = await insertOrderIntoDb(req.body);
    res.status(201).send("Order created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};