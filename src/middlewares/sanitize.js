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
.replace(/on\w+\s*=/gi,"")
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

function cleanCopy(obj) {
if (!obj || typeof obj !== "object")
return obj;
const copy = {};
for (const key of Object.keys(obj)) {
if (typeof obj[key] === "string") {
copy[key] = obj[key]
.replace(/<script.*?>.*?<\/script>/gi,"")
.replace(/on\w+\s*=/gi,"")
.trim();
} else if (typeof obj[key] === "object") {
copy[key] = cleanCopy(obj[key]);
} else {
copy[key] = obj[key];
}
}
return copy;
}

module.exports=
(req,res,next)=>{

if(req.body)
clean(req.body);

if(req.params)
clean(req.params);

if(req.query && Object.keys(req.query).length){
const cleaned = cleanCopy(req.query);
Object.defineProperty(req, "query", {
value: cleaned,
writable: true,
configurable: true
});
}

next();

};
