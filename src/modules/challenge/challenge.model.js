const mongoose =
require(
"mongoose"
);

module.exports =

mongoose.model(

"Challenge",

new mongoose.Schema({

userId:
mongoose.Schema.Types.ObjectId,

target:Number,

saved:{

type:Number,

default:0

},

status:{

type:String,

default:"active"

}

})

);