const router=require("express").Router()
const multer=require("multer")
const fs=require('fs')
const path=require("path")
const ImageModel=require("../models/Upload.js")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'/public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({
    storage:storage
  })
router.post('/upload',upload.single('file'),(req,res)=>{
    ImageModel.create({image: req.file.filename})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

module.exports=router
