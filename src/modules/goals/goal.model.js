const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

userId:{
type:
mongoose.Schema.Types.ObjectId,
ref:"User"
},

name:{
type:String,
required:true
},

target:{
type:Number,
required:true
},

saved:{
type:Number,
default:0
},

deadline:Date,

status:{

type:String,

enum:[

"active",
"completed"

],

default:"active"

}

},

{

timestamps:true

}

);

module.exports =
mongoose.model(
"Goal",
schema
);