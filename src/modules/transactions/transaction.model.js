const mongoose =
require("mongoose"); //import mongoose from "mongoose";

// define the Transaction schema using mongoose.Schema
const schema =

new mongoose.Schema(

{

userId:{

type:
mongoose
.Schema
.Types
.ObjectId,

ref:
"User"

},

type:{

type:String,

enum:[

"income",

"expense",

"savings",

"investment"

]

},

amount:{

type:Number,

required:true

},

category:String,

description:String,

date:{

type:Date,

default:
Date.now

}

},

{

timestamps:true

}

);

module.exports = mongoose.model("Transaction",schema); //export the Transaction model based on the defined schema