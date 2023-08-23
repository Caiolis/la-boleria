import { db } from "../database/database.connection.js";

export function insertClientIntoDb(body) {
  return db.query(
    "INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);",
    [body.name, body.address, body.phone]
  );
}

export function searchClientById(id) {
  return db.query("SELECT * FROM clients WHERE id=$1;", [id]);
}