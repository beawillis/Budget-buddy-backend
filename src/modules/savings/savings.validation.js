const Joi =
require(
"joi"
);

exports.create =

Joi.object({

target:
Joi.number()
.required()

});