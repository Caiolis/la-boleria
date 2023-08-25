import { insertClientIntoDb, searchClientOrders } from "../repositories/client.repository.js";
import dayjs from "dayjs";

export async function createClient(req, res) {
  try {
    const query = await insertClientIntoDb(req.body);
    res.status(201).send('Client created successfully');
  } catch (err) {
    res.status(500).send(err.message);
  };
};

export async function getClientOrders(req, res) {
  const { id } = req.params;
  const response = [];
  const outputFormat = 'YYYY-MM-DD H:mm';

  try {
    const query = await searchClientOrders(id)
    for(let i = 0; i < query.rows.length; i++) {
      const parsedDate = dayjs(query.rows[i].createdAt, { utc: true });
      const formattedDate = parsedDate.format(outputFormat);

      const orderObject = {
        orderId: query.rows[i].orderId,
        quantity: query.rows[i].quantity,
        createdAt: formattedDate,
        totalPrice: Number(query.rows[i].totalPrice),
        cakeName: query.rows[i].cakeName 
      };

      response.push(orderObject);
    }
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err.message);
  }
}