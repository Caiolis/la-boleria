import { Router } from "express";

// Schemas
import { clientSchema } from "../schemas/client.schema.js";

// Middleware
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { verifyClientExistance } from "../middlewares/client.middleware.js";

// Controllers
import { createClient, getClientOrders } from "../controllers/client.controller.js";

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientSchema), createClient);
clientsRouter.get('/clients/:id/orders', verifyClientExistance, getClientOrders);

export default clientsRouter;