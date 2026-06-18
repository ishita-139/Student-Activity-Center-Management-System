const express = require("express");

const router = express.Router();

const Committee = require("../models/Committee");


// Create Committee
router.post("/", async(req,res)=>{

    try{

        const committee =
        await Committee.create(req.body);

        res.status(201).json(committee);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Get All Committees
router.get("/", async(req,res)=>{

    try{

        const committees =
        await Committee.find()
        .populate("members");

        res.json(committees);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Get Single Committee
router.get("/:id", async(req,res)=>{

    try{

        const committee =
        await Committee.findById(req.params.id)
        .populate("members");

        res.json(committee);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Update Committee
router.put("/:id", async(req,res)=>{

    try{

        const committee =
        await Committee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(committee);

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Delete Committee
router.delete("/:id", async(req,res)=>{

    try{

        await Committee.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Committee Deleted Successfully"
        });

    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

module.exports = router;