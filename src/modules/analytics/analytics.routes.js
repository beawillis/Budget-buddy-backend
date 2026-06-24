const router =
require(
"express"
)
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
"./analytics.controller"
);

router.get(

"/summary",

auth,

controller.summary

);

module.exports =
router;