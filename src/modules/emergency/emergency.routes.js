const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const controller =
require(
"./emergency.controller"
);

router.get(
"/",
auth,
controller.get
);

module.exports =
router;