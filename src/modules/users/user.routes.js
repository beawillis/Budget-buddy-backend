const router =
require("express")
.Router(); //import the Router class from express and create a new router instance

const auth =
require(
"../../middlewares/auth"
); //import the auth middleware to protect routes and ensure that only authenticated users can access them

const upload =
require(
"../../middlewares/upload"
); //import the upload middleware to handle file uploads, specifically for user avatars


const controller =
require(
"./user.controller"
); //import the user controller to handle user-related requests


router.get("/profile",auth,controller.profile); //define a GET route for retrieving the user's profile that calls the profile controller

router.put("/profile",auth,controller.update); //define a PUT route for updating the user's profile that calls the update controller

router.post("/avatar",auth,upload.single("avatar"),controller.avatar); //define a POST route for uploading the user's avatar that calls the avatar controller and uses the upload middleware to handle the file upload

module.exports =
router; 