const router =
require("express")
.Router();

const auth =
require(
"../../middlewares/auth"
);

const upload =
require(
"../../middlewares/upload"
);

const validate =
require(
"../../middlewares/validate"
);

const { updateProfileSchema } =
require(
"./user.validation"
);

const controller =
require(
"./user.controller"
);

router.get("/profile", auth, controller.profile);

router.put("/profile", auth, validate(updateProfileSchema), controller.update);

router.post("/avatar", auth, upload.single("avatar"), controller.avatar);

module.exports =
router;
