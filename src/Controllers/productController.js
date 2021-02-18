const bookschema = require('../Models/book');
const  categoryschema= require('../Models/category');
const authorschema = require('../Models/author');
const multer = require('multer');


var storage =multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g,"-")+"_"+file.originalname);
    }
});
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/jpeg'||file.mimetype==='image/jpg'||file.mimetype==='image/png'||file.mimetype==='image/jfif'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};
const upload = multer({
    storage: storage,
    limits: {fieldSize:  1024*1024*5},
    fileFilter: fileFilter
});

const getAllBooks = (book ,callback)  =>{
    bookSchema.find(book, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getBookByName = (book ,callback)  =>{
    bookSchema.find(book, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getBookById = (book ,callback)  =>{
    bookSchema.findOne(book, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getBookByCategory = (book ,callback)  =>{
    bookSchema.find(book, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getBookByAuthor = (book ,callback)  =>{
    bookSchema.find(book, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getCategories = (category ,callback)  =>{
    categoryschema.find(category, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }

  const getAuthors = (author ,callback)  =>{
    authorschema.find(author, (error, data) => {
      if (error) {
        return callback(error)
      } else {
        return callback(null,data)
      }
    })
  }


  
  