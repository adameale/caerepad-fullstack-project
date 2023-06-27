const Cart = require("../models/Cart")
const {verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} =require("./verifyToken")

const router=require("express").Router()

//create

router.post("/",verifyToken,async (req,res)=>{
const newCart=new Cart(req.body)

try {
 const saveCart=await newCart.save()
 res.status(200).json(saveCart)
} catch (error) {
   res.status(500).json(error) 
}
})

//update
router.put("/:id",verifyTokenAndAuthorization, async (req,res)=>{
   
   try {
    const updatedCart= await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set:req.body,
    },
    {new:true})
    res.status(200).json(updatedCart)
   } catch (error) {
    res.status(500).json(error)
   }
})

// //delete
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json(" cart has been deleted...")  
    } catch (error) {
        res.status(500).json(error)
        
    }
      })
    
    
//         //get user cart
        router.get("/find/:userId",verifyTokenAndAuthorization,async (req,res)=>{
            try {
             const cart = await Cart.find({userId:req.params.userId})
             res.status(200).json(cart)
                
            } catch (error) {
                res.status(500).json(error)
                
            }
              })



               //get all cart
        router.get("/",verifyTokenAndAdmin, async (req,res)=>{
             try {
       const cart =await Cart.find()
       res.status(200).json(cart)
                
             } catch (error) {
            res.status(500).json(error)    
             }
        })

module.exports=router