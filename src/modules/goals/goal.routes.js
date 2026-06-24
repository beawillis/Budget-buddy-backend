const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const validate =
require(
"../../middlewares/validate"
);

const {

createGoalSchema,

depositSchema

}

=
require(
"./goal.validation"
);

const controller =
require(
"./goal.controller"
);

router.post(

"/",

auth,

validate(
createGoalSchema
),

controller.create

);

router.get(

"/",

auth,

controller.list

);

router.post(

"/:id/deposit",

auth,

validate(
depositSchema
),

controller.deposit

);

module.exports =
router;