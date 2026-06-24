const router=
require(
"express"
).Router();

const controller=
require(
"./investment.controller"
);

router.post(
"/simulate",
controller.simulate
);

module.exports=
router;