const Challenge =
require(
"./challenge.model"
);

exports.start =
async(
userId,
expense
)=>{

return Challenge
.create({

userId,

target:

Math.max(

1000,

expense
*
0.25

)

});

};

exports.progress =
async(
userId
)=>{

return Challenge
.findOne({

userId

});

};