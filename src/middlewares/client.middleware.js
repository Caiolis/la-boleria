import { searchClientById } from "../repositories/client.repository.js";

export async function verifyClientExistance(req, res, next) {
  const { id } = req.params;

  try {
    const query = await searchClientById(id);
    if (query.rows.length === 0) return res.status(404).send('Client does not exist');

    next();
  } catch (err) {
    res.status(500).send(err.message);
  };
}