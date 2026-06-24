const z =
require("zod"); //import z from "zod" to define validation schemas for transaction-related requests

//define the validation schema for creating a transaction using zod, which includes fields for type, amount, category, description, and date
exports.createTransactionSchema =

z.object({

type:

z.enum([

"income",

"expense",

"savings",

"investment"

]),

amount:

z.number()
.positive(),

category:

z.string()
.min(2),

description:

z.string()
.optional(),

date:

z.string()
.optional()

});