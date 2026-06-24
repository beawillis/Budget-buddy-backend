const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const controller =
require(
"./category.controller"
);

router.post(

"/",

auth,

controller.create

);

router.get(

"/",

auth,

controller.list

);

router.delete(

"/:id",

auth,

controller.remove

);

module.exports =
router;