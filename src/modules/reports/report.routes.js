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
"./report.controller"
);

router.get(

"/export",

auth,

permission("admin"),

controller.export

);

module.exports =
router;