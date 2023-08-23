// Imports
import express from "express";
import cors from "cors";

// Server configuration
const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));