const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const controller =
require(
"./challenge.controller"
);

router.post(
"/start",
auth,
controller.start
);

router.get(
"/",
auth,
controller.get
);

module.exports =
router;