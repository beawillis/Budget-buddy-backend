const router =
require("express")
.Router();

const auth =
require("../../middlewares/auth");

const controller =
require(
"./wallet.controller"
);

router.get(

"/summary",

auth,

controller.summary

);

module.exports =
router;