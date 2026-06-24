const Notification =
require(
"./notification.model"
);

const queue =
require(
"../../queues/email.queue"
);

exports.create =
async(
userId,
title,
message
)=>{

return Notification
.create({

userId,

title,

message

});

};

exports.list =
async(
userId
)=>{

return Notification
.find({

userId

})
.sort({

createdAt:-1

});

};

exports.sendEmail =

async(
email,
message
)=>{

await queue
.add(

"send",

{

email,

message

}

);

};
