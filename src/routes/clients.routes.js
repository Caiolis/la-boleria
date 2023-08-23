import { Router } from "express";

// Schemas
import { clientSchema } from "../schemas/client.schema.js";

// Middleware
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

// Controllers
import { createClient } from "../controllers/client.controller.js";

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientSchema), createClient);

export default clientsRouter;