import { Router } from "express";

// Schemas
import { orderSchema } from "../schemas/order.schema.js";

// Middlewares
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { verifyExistance, verifyOrderExistance, verifyOrders } from "../middlewares/order.middleware.js";

// Controllers
import { createOrder, getAllOrders, getOrderById } from "../controllers/order.controller.js";

const ordersRouter = Router();

ordersRouter.post('/order', validateSchema(orderSchema), verifyExistance, createOrder);
ordersRouter.get('/orders', verifyOrders, getAllOrders);
ordersRouter.get('/orders/:id', verifyOrderExistance, getOrderById);

export default ordersRouter;