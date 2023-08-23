import { searchCakeByName } from "../repositories/cake.repository.js";

export async function validateCakeName(req, res, next) {
  const { name } = req.body;

  try {
    const query = await searchCakeByName(name)

    if (query.rows.length !== 0) return res.status(409).send('Cake already exists');
    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};