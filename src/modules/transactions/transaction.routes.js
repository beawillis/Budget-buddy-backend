const router =
require("express")
.Router(); //import the Router class from express and create a new router instance

const auth =
require(
"../../middlewares/auth"
); //import the auth middleware to protect transaction routes and ensure that only authenticated users can access them


const controller =
require(
"./transaction.controller"
); //import the transaction controller to handle transaction-related requests such as creating, listing, and deleting transactions

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