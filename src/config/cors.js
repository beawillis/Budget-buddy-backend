const cors = require("cors");

module.exports = cors({

origin:(origin,callback)=>{

if(!origin){
return callback(null,true);
}

const allowed =

origin.includes(".vercel.app") ||

origin==="https://budget-buddy-fintech.vercel.app/" ||

origin==="https://budget-buddy-fintech-git-main-beawillis2005-2956s-projects.vercel.app/" ||

origin==="https://budget-buddy-fintech-8jtzknec1-beawillis2005-2956s-projects.vercel.app/";

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