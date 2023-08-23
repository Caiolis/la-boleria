// Imports
import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

// Server configuration
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));