const router=
require(
"express"
).Router();

const auth=
require(
"../../middlewares/auth"
);

const validate=
require(
"../../middlewares/validate"
);

const { create } =
require(
"./savings.validation"
);

const controller=
require(
"./savings.controller"
);

router.post(
"/start",
auth,
validate(create),
controller.start
);

router.post(
"/deposit",
auth,
controller.deposit
);

router.get(
"/status",
auth,
controller.status
);

module.exports=
router;
