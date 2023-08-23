import { insertClientIntoDb } from "../repositories/client.repository.js";

export async function createClient(req, res) {
  try {
    const query = await insertClientIntoDb(req.body);
    res.status(201).send('Client created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  };
};