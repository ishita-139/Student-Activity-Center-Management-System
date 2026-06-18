const express = require("express");

const router = express.Router();

const Club = require("../models/Club");


// Create Club
router.post("/", async (req,res)=>{

    try{

        const club = await Club.create(req.body);

        res.status(201).json(club);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Get All Clubs
router.get("/", async(req,res)=>{

    try{

        const clubs = await Club.find()
        .populate("members");

        res.json(clubs);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Get Single Club
router.get("/:id", async(req,res)=>{

    try{

        const club = await Club.findById(req.params.id)
        .populate("members");

        res.json(club);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Update Club
router.put("/:id", async(req,res)=>{

    try{

        const updatedClub =
        await Club.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(updatedClub);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Delete Club
router.delete("/:id", async(req,res)=>{

    try{

        await Club.findByIdAndDelete(req.params.id);

        res.json({
            message:"Club Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports = router;