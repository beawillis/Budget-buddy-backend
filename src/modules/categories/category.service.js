const Category =
require(
"./category.model"
); //import the Category model to interact with the categories collection in the database and perform CRUD operations related to categories for the authenticated user

// service function for creating a new category, which takes the userId and name as parameters and creates a new category document in the database associated with the authenticated user
exports.create =
async(
userId,
name
)=>{

return Category
.create({

userId,

name

});

};

// service function for listing all categories for the authenticated user
exports.list =
async(
userId
)=>{

return Category
.find({

userId

});

};

// delete category by id and userId to ensure that only the owner of the category can delete it, which takes the category id and userId as parameters and deletes the corresponding category document from the database
exports.remove =
async(
id,
userId
)=>{

return Category
.findOneAndDelete({

_id:id,

userId

});

};