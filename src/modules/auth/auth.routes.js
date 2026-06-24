const router = require("express").Router(); //import the Router class from express and create a new router instance

const controller = require("./auth.controller"); //import the auth controller to handle authentication-related requests


router.post("/register",controller.register); //define a POST route for user registration that calls the register controller

router.post("/login",controller.login); //define a POST route for user login that calls the login controller

module.exports = router;