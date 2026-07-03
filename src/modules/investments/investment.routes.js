const router=
require(
"express"
).Router();

const controller=
require(
"./investment.controller"
);

const validate=
require(
"../../middlewares/validate"
);

const validator=
require(
"./investment.validation"
);

router.post(
"/simulate",
validate(validator.simulate),
controller.simulate
);

module.exports=
router;