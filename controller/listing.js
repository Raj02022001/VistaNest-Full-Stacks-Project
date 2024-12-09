const Listing = require("../models/listing.js");
const mapToken = process.env.MAP_TOKEN;
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }

module.exports.renderNerForm = (req,res)=>{
    res.render("listings/new.ejs")
  }  

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).
    populate({
      path:"reviews",
      populate: {
        path: "author",
      }
    }).
    populate("owner");
    if (!listing){
      req.flash("error", "Listing you are looking for does not exist");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
    console.log(listing)
    };

module.exports.editListing = async (req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing){
      req.flash("error", "Listing you are looking for does not exist");
      res.redirect("/listings");
    }
    let originalImage = listing.image.url;
    originalImage = originalImage.replace("/upload" , "/upload/w_250")
    res.render("listings/edit.ejs", {listing,originalImage})
};

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if (typeof req.file !=="undefined"){
      let url = req.file.path;
      let filename = req.file.filename;

     listing.image = {url,filename};
     await listing.save();
    }
   req.flash("success", "Listing Updated");
   res.redirect("/listings")
  };

module.exports.createListing = async (req,res,next) => {
  let response = await geocodingClient
  .forwardGeocode({
    query: req.body.listing.location,
    limit : 1,
  })
  .send();

  let url = req.file.path;
  let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner =  req.user._id;
    newListing.image = {url,filename};

    newListing.geometry = response.body.features[0].geometry;

    let saveListing = await newListing.save();
    console.log(saveListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  };

module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
  };