const router=require("express").Router()
const multer=require("multer")
const fs=require('fs')
const imageModel=require("../models/Upload.js")

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./carepad-api/upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})
router.post('/',upload.single('testImage'),(req,res)=>{
    const savedImage=new imageModel({
        name:req.body.name,
        img:{
            data: fs.readFileSync('/carepad-api/upload/' + req.file.filename),
            contentType:"image/png",
        },
    })
    savedImage.save().then((res)=>{
        console.log('image is uploaded')}).catch((err)=>{
            console.log(err,'an error is occur')
        })
        res.send('image is saved')
})

module.exports=router
