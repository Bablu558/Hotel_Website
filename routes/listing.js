const express=require("express");
const router = express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const Listing=require("../models/listing.js")
const {isLoggedIn ,isOwner,validateListing}=require("../middleware.js");

const listingController= require("../controllers/listing.js");
const multer = require("multer");
const {storage}=require("../cloudCofig.js");
const upload = multer({storage});


//yaha index aur create route same route pe aa rahi to hum Reformate karenge

router.route("/")
.get(wrapAsync(listingController.index))
.post(
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing, wrapAsync(listingController.createListing));




 // New Routs 
 router.get("/new", isLoggedIn,listingController.renderNewForm);


  // for show route,update  and delete
  router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
  upload.single("listing[image]"),
    validateListing,
     wrapAsync(listingController.updateListing))
     .delete(
      isLoggedIn,
      isOwner,
      wrapAsync(listingController.destroyListing));
    
    
   
    
    
    
    
    
   
    
    
    //Edit route
    router.get("/:id/edit",
      isLoggedIn,
      isOwner,
      wrapAsync(listingController.renderEditForm));
    
  
    
    
    
    module.exports = router;