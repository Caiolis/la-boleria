import joi from "joi";

export const orderSchema = joi.object({
  clientId: joi.number().required(),
  cakeId: joi.number().required(),
  quantity: joi.number().required().greater(0).less(5),
  totalPrice: joi.number().required()
});