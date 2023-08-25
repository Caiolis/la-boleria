import { db } from "../database/database.connection.js";

export function insertOrderIntoDb(body) {
  return db.query(
    'INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES ($1, $2, $3, $4, NOW());',
    [body.clientId, body.cakeId, body.quantity, body.totalPrice]
  );
}

export function searchAllOrders() {
  return db.query("SELECT * FROM orders;");
}

export function searchAllOrdersAndCakes(timestamp) {
  if (timestamp)
    return db.query(
      'SELECT clients.id AS "clientId", clients.name, clients.address, clients.phone, cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image, orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice" FROM orders JOIN clients ON orders."clientId" = clients.id JOIN cakes ON orders."cakeId" = cakes.id WHERE "createdAt"=$1;',
      [timestamp]
    );

  return db.query(
    'SELECT clients.id AS "clientId", clients.name, clients.address, clients.phone, cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image, orders.id AS "orderId", orders.quantity, orders."createdAt", orders."totalPrice" FROM orders JOIN clients ON orders."clientId" = clients.id JOIN cakes ON orders."cakeId" = cakes.id;'
  );
}
