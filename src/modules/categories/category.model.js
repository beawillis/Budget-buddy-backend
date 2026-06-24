const mongoose =
require(
"mongoose"
); //import mongoose from "mongoose";

// define the Category schema using mongoose.Schema
module.exports =

mongoose.model(

"Category",

new mongoose.Schema({

userId:{
type:
mongoose
.Schema
.Types
.ObjectId
},

name:String

})

);