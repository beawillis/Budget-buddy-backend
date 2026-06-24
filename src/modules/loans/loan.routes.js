const router=
require("express")
.Router();

const auth=
require(
"../../middlewares/auth"
);

const validate=
require(
"../../middlewares/validate"
);

const validator=
require(
"./loan.validation"
);

const controller=
require(
"./loan.controller"
);

router.post(

"/calculate",

validate(
validator.calculate
),

controller.calculate

);

router.post(

"/save",

auth,

validate(
validator.save
),

controller.save

);

module.exports=
router;
