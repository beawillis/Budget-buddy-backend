const Joi=
require(
"joi"
);

exports.calculate=
Joi.object({

amount:
Joi.number()

.min(1000)

.required(),

interestRate:
Joi.number()

.min(0)

.max(100)

.required(),

term:
Joi.number()

.min(1)

.max(40)

.required()

});



exports.save=
Joi.object({

amount:
Joi.number()

.required(),

interestRate:
Joi.number()

.required(),

term:
Joi.number()

.required(),

monthlyPayment:
Joi.number()

.required()

});