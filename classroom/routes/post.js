const express=require("express");
const router=express.Router();

//post
// index 
router.get("/",(req,res)=>{
    res.send("Get for post");
});

// Show 
router.get("/:id",(req,res)=>{
    res.send("show for  post id");
});

// post
router.post("//",(req,res)=>{
    res.send("Post for post");
});

//Delete 

router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});
