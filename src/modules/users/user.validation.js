const z =
require("zod"); // import zod for validation of user input and request bodies

// update Profile Schema
exports.updateProfileSchema =

z.object({

name:

z.string()
.min(3)
.optional(),

theme:

z.enum([
"light",
"dark"
])
.optional(),

preferences:

z.object({

currency:

z.string()
.optional(),

notifications:

z.boolean()
.optional()

})

.optional(),

financialProfile:

z.object({

occupation:

z.string()
.optional(),

education:

z.string()
.optional(),

region:

z.string()
.optional(),

creditScore:

z.number()
.min(300)
.max(850)
.optional()

})

.optional()

});