const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const permission=
require(
"../../middlewares/permissions"
);

const controller =
require(
"./notification.controller"
);

router.get(
"/",
auth,
permission("user"),
controller.list
);

module.exports =
router;