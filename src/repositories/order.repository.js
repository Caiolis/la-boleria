import { db } from "../database/database.connection.js";

export function insertOrderIntoDb(body) {
  return db.query(
    'INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, NOW());',
    [body.clientId, body.cakeId, body.quantity, body.totalPrice]
  );
}
