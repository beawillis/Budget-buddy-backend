const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const controller =
require(
"./assistant.controller"
);

router.get(

"/",

auth,

controller.chat

);

module.exports =
router;