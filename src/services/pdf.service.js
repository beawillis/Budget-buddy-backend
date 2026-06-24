const PDF =
require(
"pdfkit"
);

exports.generate =

async(
data,
res
)=>{

const doc =
new PDF();

doc.pipe(
res
);

doc.fontSize(20)
.text(
"BudgetBuddy Report"
);

doc.moveDown();

doc.text(

JSON.stringify(
data,
null,
2
)

);

doc.end();

};