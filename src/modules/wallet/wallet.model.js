const mongoose =
require(
"mongoose"
); //import mongoose from "mongoose";

// define the Wallet schema using mongoose.Schema
module.exports =

mongoose.model(

"Wallet",

new mongoose.Schema({

userId:{

type:
mongoose
.Schema
.Types
.ObjectId

},

balance:{
type:Number,
default:0
},

income:{
type:Number,
default:0
},

expense:{
type:Number,
default:0
}

})

);