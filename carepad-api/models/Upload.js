const mongoose =require("mongoose")
const imgSchema=new mongoose.Schema({
    image:String
})

const ImageModel=mongoose.model("Image",imgSchema)
module.exports=ImageModel