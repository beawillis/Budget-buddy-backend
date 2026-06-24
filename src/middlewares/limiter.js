const limit =
require(
"express-rate-limit"
);

module.exports =

limit({

windowMs:

15
*
60
*
1000,

max:

1000,

message:

{

success:false,

message:

"Too many requests"

}

});