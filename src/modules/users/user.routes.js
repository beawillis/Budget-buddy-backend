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

const { updateProfileSchema, changePasswordSchema } =
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

router.post("/change-password", auth, validate(changePasswordSchema), controller.changePassword);

module.exports =
router;
