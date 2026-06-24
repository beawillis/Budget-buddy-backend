const mongoose =
require("mongoose");

const schema =
new mongoose.Schema({

user:{
type:
mongoose.Schema.Types.ObjectId,
ref:"User"
},

target:Number,

saved:{
type:Number,
default:0
},

status:{
type:String,
default:"active"
}

},

{

timestamps:true

}

);

module.exports=
mongoose.model(
"Savings",
schema
);