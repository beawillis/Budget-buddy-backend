function clean(obj) {

if (!obj || typeof obj !== "object")
return obj;

Object.keys(obj).forEach((key)=>{

if (
typeof obj[key] === "string"
){

obj[key]=
obj[key]
.replace(/<script.*?>.*?<\/script>/gi,"")
.trim();

}

else if(
typeof obj[key] === "object"
){

clean(obj[key]);

}

});

return obj;

}

module.exports=
(req,res,next)=>{

if(req.body)
clean(req.body);

if(req.params)
clean(req.params);

next();

};
