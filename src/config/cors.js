const cors = require("cors");

module.exports = cors({

origin:(origin,callback)=>{

if(!origin){
return callback(null,true);
}

const allowed =

origin.includes(".vercel.app") ||

origin==="http://localhost:5500" ||

origin==="http://localhost:3000";

if(allowed){
return callback(null,true);
}

callback(new Error("CORS blocked"));

},

credentials:true,

methods:[
"GET",
"POST",
"PUT",
"PATCH",
"DELETE",
"OPTIONS"
],

allowedHeaders:[
"Content-Type",
"Authorization"
]

});