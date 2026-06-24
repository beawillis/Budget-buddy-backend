const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const controller =
require(
"./dashboard.controller"
);

router.get(

"/",

auth,

controller.dashboard

);

module.exports =
router;