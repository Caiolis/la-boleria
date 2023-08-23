import { Router } from "express";

// Schemas
import { cakeSchema } from "../schemas/cake.schema.js";

// Middlwares
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { validateCakeName } from "../middlewares/cake.middleware.js";

// Controllers
import { createCake } from "../controllers/cake.controller.js";

const cakeRouter = Router();

cakeRouter.post('/cakes', validateSchema(cakeSchema), validateCakeName, createCake)

export default cakeRouter;