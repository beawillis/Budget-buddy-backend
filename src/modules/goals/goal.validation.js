const z =
require("zod");

exports.createGoalSchema =

z.object({

name:

z
.string()

.min(
3,
"Goal name too short"
)

.max(
50,
"Goal name too long"
),

target:

z
.number()

.positive(
"Target must be greater than 0"
)

.max(
1000000000,
"Target too large"
),

deadline:

z
.string()

.optional()

.refine(

(value)=>{

if(!value)
return true;

return !isNaN(
Date.parse(value)
);

},

{

message:
"Invalid date"

}

)

});



exports.depositSchema =

z.object({

amount:

z
.number()

.positive(
"Deposit must be greater than 0"
)

.max(
100000000,
"Deposit too large"
)

});