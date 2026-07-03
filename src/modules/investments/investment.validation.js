const Joi = require("joi");

exports.simulate = Joi.object({
  principal: Joi.number().min(100).required(),
  rate: Joi.number().min(0).max(100).required(),
  years: Joi.number().min(1).max(50).required()
});
