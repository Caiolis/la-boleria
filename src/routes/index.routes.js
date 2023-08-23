import { Router } from "express";

// Routes
import cakeRouter from "./cakes.routes.js";
import clientsRouter from "./clients.routes.js";

const router = Router();
router.use(cakeRouter);
router.use(clientsRouter);

export default router;