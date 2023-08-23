import { db } from "../database/database.connection.js";

export function searchCakeByName(name) {
  return db.query("SELECT * FROM cakes WHERE name=$1;", [name]);
}

export function insertCakeIntoDb(body) {
  return db.query(
    "INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)",
    [body.name, body.price, body.image, body.description]
  );
}
