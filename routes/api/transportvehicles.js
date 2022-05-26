const express = require("express");
const { route } = require("..");
let router = express.Router();
var Transportvehicle = require("../../models/transportvehicle");
//get transportvehicles
router.get("/",async(req,res)=>{
    let transportvehicles = await Transportvehicle.find();
    return res.send(transportvehicles);
});
//get single transportvehicles
router.get("/:id",async(req,res)=>{
    try{
        let transportvehicle = await Transportvehicle.findById(req.params.id);
        if (! transportvehicle) 
            return res.status(404).send("Product Id is Incorrect");
        return res.status(404).send(transportvehicle);//everything is okay
    }
    catch(err){
        return res.send("Invalid Id")
    }
});

//update a record
router.put("/:id",async(req,res)=>{
    let transportvehicle = await Transportvehicle.findById(req.params.id);
    transportvehicle.Type = req.body.Type;
    transportvehicle.Length = req.body.Length;
    transportvehicle.Weight = req.body.Weight;
    await transportvehicle.save();
    return res.send(transportvehicle);
});
//delete a record
router.delete("/:id",async(req,res)=>{
    try{
        let transportvehicle = await Transportvehicle.findByIdAndDelete(req.params.id);
        if (! transportvehicle) 
            return res.status(404).send("Product Id is Incorrect");
        return res.send(transportvehicle);
    }
    catch(err){
        return res.send("Invalid Id")
    }
    
});
//Insert a record
router.post("/",async(req,res)=>{
    let transportvehicle = new Transportvehicle();
    transportvehicle.Type = req.body.Type;
    transportvehicle.Length = req.body.Length;
    transportvehicle.Weight = req.body.Weight;
    await transportvehicle.save();
    return res.send(transportvehicle);
});
module.exports = router;