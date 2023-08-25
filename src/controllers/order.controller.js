import { searchCakeById } from "../repositories/cake.repository.js";
import { insertOrderIntoDb, searchAllOrdersAndCakes, searchOrderById } from "../repositories/order.repository.js";
import dayjs from "dayjs";

export async function createOrder(req, res) {
  try {
    const query = await insertOrderIntoDb(req.body);
    res.status(201).send("Order created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export async function getAllOrders(req, res) {
  const { date } = req.query;
  const response = [];
  const outputFormat = 'YYYY-MM-DD H:mm';

  try {
    const query = await searchAllOrdersAndCakes(date)
    for(let i = 0; i < query.rows.length; i++) {
      const parsedDate = dayjs(query.rows[i].createdAt, { utc: true });
      const formattedDate = parsedDate.format(outputFormat);

      const orderObject = {
        client: {
          id: query.rows[i].clientId,
          name: query.rows[i].name,
          address: query.rows[i].address,
          phone: query.rows[i].phone
        },
        cake: {
          id: query.rows[i].cakeId,
          name: query.rows[i].cakeName,
          price: Number(query.rows[i].price),
          description: query.rows[i].description,
          image: query.rows[i].image
        },
        orderId: query.rows[i].orderId,
        createdAt: formattedDate,
        quantity: query.rows[i].quantity,
        totalPrice: Number(query.rows[i].totalPrice)  
      };

      response.push(orderObject);
    }

    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export async function getOrderById(req, res) {
  const { id } = req.params;
  const outputFormat = 'YYYY-MM-DD H:mm';

  try {
    const query = await searchOrderById(id)
      const parsedDate = dayjs(query.rows[0].createdAt, { utc: true });
      const formattedDate = parsedDate.format(outputFormat);

      const orderObject = {
        client: {
          id: query.rows[0].clientId,
          name: query.rows[0].name,
          address: query.rows[0].address,
          phone: query.rows[0].phone
        },
        cake: {
          id: query.rows[0].cakeId,
          name: query.rows[0].cakeName,
          price: Number(query.rows[0].price),
          description: query.rows[0].description,
          image: query.rows[0].image
        },
        orderId: query.rows[0].orderId,
        createdAt: formattedDate,
        quantity: query.rows[0].quantity,
      }
    res.status(200).send(orderObject)
  } catch (err) {
    res.status(500).send(err.message);
  }
}