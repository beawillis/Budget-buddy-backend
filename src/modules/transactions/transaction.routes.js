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

const { createTransactionSchema } =
require(
"./transaction.validation"
);

const controller =
require(
"./transaction.controller"
);

router.post(
"/",
auth,
validate(createTransactionSchema),
controller.create
);

router.get(
"/",
auth,
controller.list
);

router.delete(

"/:id",

auth,

controller.remove

);

module.exports =
router;
