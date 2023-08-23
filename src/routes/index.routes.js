import { Router } from "express";

// Routes
import cakeRouter from "./cakes.routes.js";

const router = Router();
router.use(cakeRouter);

export default router;