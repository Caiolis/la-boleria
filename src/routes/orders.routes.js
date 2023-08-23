import { Router } from "express";

// Schemas
import { orderSchema } from "../schemas/order.schema.js";

// Middlewares
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { verifyExistance } from "../middlewares/order.middleware.js";

// Controllers
import { createOrder } from "../controllers/order.controller.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(orderSchema), verifyExistance, createOrder);

export default ordersRouter;