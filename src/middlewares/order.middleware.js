// repositories
import { searchCakeById } from "../repositories/cake.repository.js";
import { searchClientById } from "../repositories/client.repository.js";

export async function verifyExistance(req, res, next) {
  const { clientId, cakeId } = req.body;

  try {
    const clientQuery = await searchClientById(clientId);
    if (clientQuery.rows.length === 0) return res.status(404).send('Client does not exist');

    const cakeQuery = await searchCakeById(cakeId);
    if (cakeQuery.rows.length === 0) return res.status(404).send('Cake does not exist');

    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};