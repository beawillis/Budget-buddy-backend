const z = require("zod"); //import z from "zod";

//define the validation schema for user registration and login using zod
exports.registerSchema = z.object({ 

name:

z.string()
.min(3),

email:

z.email(),

password:

z.string()
.min(6)

});

//define the validation schema for user login using zod
exports.loginSchema =

z.object({

email:

z.email(),

password:

z.string()

});