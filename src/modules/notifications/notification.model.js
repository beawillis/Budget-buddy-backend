const mongoose =
require(
"mongoose"
);

module.exports =

mongoose.model(

"Notification",

new mongoose.Schema({

userId:
mongoose.Schema.Types.ObjectId,

title:String,

message:String,

read:{

type:Boolean,

default:false

}

},

{

timestamps:true

}

)

);