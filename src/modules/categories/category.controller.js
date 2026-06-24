const service =
require(
"./category.service"
); //import the category service to handle business logic related to category operations such as creating a new category, listing all categories for the authenticated user, and deleting a category by id for the authenticated user

// controller for creating a new category
exports.create =
async(
req,
res
)=>{

const category =

await service.create(

req.user.id,

req.body.name

);

res
.status(201)
.json(
category
);

};

// controller for listing all categories for the authenticated user
exports.list =
async(
req,
res
)=>{

const categories =

await service.list(

req.user.id

);

res.json(
categories
);

};

// controller for deleting a category by id for the authenticated user, which ensures that only the owner of the category can delete it by passing the userId along with the category id to the service function
exports.remove =
async(
req,
res
)=>{

await service.remove(

req.params.id,

req.user.id

);

res.json({

success:true

});

};