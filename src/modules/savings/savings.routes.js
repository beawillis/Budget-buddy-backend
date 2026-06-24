const router=
require(
"express"
).Router();

const auth=
require(
"../../middlewares/auth"
);

const controller=
require(
"./savings.controller"
);

router.post(
"/start",
auth,
controller.start
);

module.exports=
router;