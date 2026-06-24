const multer = require("multer"); //import multer from "multer" for handling file uploads


const {CloudinaryStorage} = require("multer-storage-cloudinary");//import CloudinaryStorage from "multer-storage-cloudinary" to use Cloudinary as the storage engine for multer

const cloudinary = require("../config/cloudinary");//import the configured cloudinary instance from cloudinary.js to use it for uploading files to Cloudinary

//create a new instance of CloudinaryStorage with the specified configuration
const storage =

new CloudinaryStorage({

cloudinary,

params:{

folder:
"budgetbuddy"

}

});

module.exports = multer({storage}); //export the multer instance with the configured Cloudinary storage engine for use in other parts of the application