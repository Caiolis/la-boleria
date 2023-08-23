import { insertCakeIntoDb } from "../repositories/cake.repository.js";

export async function createCake(req, res) {
  try {
    const query = await insertCakeIntoDb(req.body);
    res.status(201).send('Cake created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  };
};