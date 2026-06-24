const report =
require(
"./report.service"
);

const pdf =
require(
"../../services/pdf.service"
);

exports.export =
async(
req,
res,
next
)=>{

try{

const data =

await report
.report(

req.user.id

);

res.setHeader(

"Content-Type",

"application/pdf"

);

await pdf.generate(

data,

res

);

}catch(err){
next(err);
}

};
