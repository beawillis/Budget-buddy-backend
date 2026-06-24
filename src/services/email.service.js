const nodemailer =
require(
"nodemailer"
);

const transporter =

nodemailer
.createTransport({

service:

"gmail",

auth:{

user:
process.env.EMAIL,

pass:
process.env.EMAIL_PASS

}

});

exports.send =

async(

to,

subject,

html

)=>{

return transporter
.sendMail({

from:
process.env.EMAIL,

to,

subject,

html

});

};