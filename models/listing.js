const mongoose=require("mongoose");
const review = require("./review");
const Schema=mongoose.Schema;
const Review=require("./review.js");




const listingSchema=new Schema({
    // title:String,
    title:{
        type:String,
        required:true,
    },
    description:String,
    // image:String,
    image:{
        url:String,
        filename:String
    },
    price:Number,
    location:String,
     country:String,
reviews:[
    {
        type:Schema.Types.ObjectId,
        ref: "Review",
    }
],
//For owner 
owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
},

// for filter when click on them 
// category:{
//     type:String,
//     enum:["mountains","arctic","farms","deserts"]
// }
});


listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
        await review.deleteMany({_id :{$in:listing.reviews} });

    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;